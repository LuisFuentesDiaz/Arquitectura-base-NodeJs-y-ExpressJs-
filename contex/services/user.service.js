class UserService {
    constructor({ UserBusiness }) {
        this._userBusiness = UserBusiness;
    }

    async getUsers() {
        return await this._userBusiness.getUsers();
    }

    async createUser(body) {
        return this._userBusiness.createUser(body);
    }

    async getFindCorreo(correo) {
        return this._userBusiness.getFindCorreo(correo);
    }

}
module.exports = UserService;