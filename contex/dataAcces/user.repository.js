class UserRepository {
    constructor({ db }) {
        this._db = db;
    }

    getUsers() {
        return this._db.user.findAll();
    }

    createUser(entity) {
        return this._db.user.create(entity);
    }

    getFindCorreo(correo) {
        console.log(correo)
        return this._db.user.findOne({
            raw: true,
            where: { correo: correo }
        });
    }
}
module.exports = UserRepository;