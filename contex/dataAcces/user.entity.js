


module.exports = (sequelize, type) => {
    const User = sequelize.define('user',
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                type: type.INTEGER
            },
            rut: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: { arg: [5, 15], msg: "El rut tiene que tener minimo 5 caracteres y maximo 15" },
                    notEmpty: { msg: "El rut es requerido" },
                    notNull: { msg: "El rut es requerido" },
                    isAlphanumeric: { msg: "El rut no debe tener puntos ni guiones" }
                },
                unique: {
                    args: true,
                    msg: "El rut ya existe"
                }

            },
            nombres: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: { arg: [1, 150], msg: "El nombre de be tener minimo 1 caracter y maximo 150" },
                    notNull: { msg: "El nombre es requerido" },
                    notEmpty: { msg: "El nombre es requerido" },
                }
            },
            apellidos: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: { arg: [5, 155], msg: "El apellido tiene que tener minimo 3 caracteres y maximo 155" },
                    notEmpty: { msg: "El apellido es requerido" },
                    notNull: { msg: "El apellido es requerido" },

                }
            },
            correo: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    len: { arg: [5, 155], msg: "El correo tiene que tener minimo 3 caracteres y maximo 155" },
                    isEmail: { msg: "Debe tener formato de correo" },
                    notNull: { msg: "El correo es requerido" },
                    notEmpty: { msg: "El correo es requerido" }
                },
                unique: {
                    args: true,
                    msg: "El correo ya existe"
                }
            },
            password: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "La contraseña es requerida" },
                    notNull: { msg: "La contraseña es requerida" },

                }
            }
        }, {
        indexes: [
            { unique: true, fields: ['rut'] }, { unique: true, fields: ['correo'] }
        ]
    }
    );

    User.addHook('beforeCreate', (user) => {
        if (user.nombres) user.nombres = user.nombres.toLowerCase();
        if (user.rut) user.rut = user.rut.toLowerCase();
        if (user.apellidos) user.apellidos = user.apellidos.toLowerCase();
    })

    return User;
}