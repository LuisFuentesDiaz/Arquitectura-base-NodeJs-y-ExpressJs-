const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = function ({ UserRoutes, AuthRoutes, authMiddleware }) {
    const router = Router();
    const apiRoute = Router()

    apiRoute
        .use(cors())
        .use(bodyParser.json())
        .use(compression());

    apiRoute.use("/users", authMiddleware, UserRoutes);
    apiRoute.use("/auth", AuthRoutes);
    router.use("", apiRoute);

    return router;
}
