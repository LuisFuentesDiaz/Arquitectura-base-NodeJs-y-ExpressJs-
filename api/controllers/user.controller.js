const bcrypt = require('bcrypt');
const authConfig = require('../auth');
const jwt = require('jsonwebtoken');


class UserController {
    constructor({ UserService }) {
        this._userService = UserService;
    }

    async getUsers(req, res) {
        await this._userService.getUsers().then((data) => {
            return res.status(200).send({ succes: true, data: data });
        }).catch(err => {
            return res.status(500).send({ msg: err.message });
        });
    }

    async createUser(req, res) {
        const body = req.body;
        if (body.password == '' || body.password == null || body.password == undefined || body.password.length < 6) {
            return res.status(400).send({ msg: "La clave debe ser minimo de 6 de caracteres" });
        } else {
            body.password = await bcrypt.hash(body.password, Number.parseInt(authConfig.rounds));//se encripta la password
            await this._userService.createUser(body).then(() => {
                return res.status(201).send({ msg: "Usuario creado" });
            }).catch(err => {
                console.log(err)
                return res.status(500).send({ msg: err.errors[0].message });
            });
        }
    }

    async login(req, res) {
        try {
            console.log("dsdsadsdsd")
            const { correo, password } = req.body;
            let user = await this._userService.getFindCorreo(correo);

            console.log("user", user)


            if (!user) {
                return res.status(404).send({ msg: "usuario no encontrado" });
            } else {
                if (bcrypt.compareSync(password, user.password)) {
                    user = { rut: user.rut, id: user.id };
                    let token = jwt.sign({ user: user }, authConfig.secret, { expiresIn: authConfig.expires })
                    console.log("dentro")

                    return res.status(200).send({
                        msg: "Sesion creada exitosamente",
                        token: token
                    });
                } else {
                    return res.status(401).send({ msg: "password incorrecta" });
                }

            }
        } catch (error) {
            return res.status(400).send({ msg: "Error al iniciar sesion" });
        }
    }



}
module.exports = UserController;