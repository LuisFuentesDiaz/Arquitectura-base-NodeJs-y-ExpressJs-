const { Router } = require("express");

module.exports = function ({ UserController }) {
    const router = Router();

    router.post("/signin", UserController.createUser.bind(UserController));
    router.post('/login', UserController.login.bind(UserController));

    return router;
}