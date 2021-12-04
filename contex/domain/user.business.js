class UserBusiness {
    constructor({ UserRepository }) {
        this._userRepository = UserRepository;
    }

    async getUsers() {
        return await this._userRepository.getUsers();
    }

    async createUser(body) {
        return this._userRepository.createUser(body);
    }

    async getFindCorreo(correo) {
        return this._userRepository.getFindCorreo(correo);
    }
}

module.exports = UserBusiness;