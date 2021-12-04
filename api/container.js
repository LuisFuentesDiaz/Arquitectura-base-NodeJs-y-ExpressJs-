const { asClass, asFunction, asValue, createContainer } = require('awilix');
const Routes = require('./routes');
const config = require('../config/environments')
const Server = require('./server');
const StartUp = require('./startup');
const { db } = require('../config/db/db');

const { UserController } = require('./controllers');
const { UserRoutes, AuthRoutes } = require('./routes/api');
const { UserService, UserBusiness, UserRepository } = require('../contex');
const authMiddleware = require('./middleware/auth.middleware');


const container = createContainer();
container
    .register({
        app: asClass(StartUp).singleton(),
        server: asClass(Server).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config),
        db: asValue(db)
    })
    .register({
        UserController: asClass(UserController).singleton()
    })
    .register({
        UserRoutes: asFunction(UserRoutes).singleton(),
    })
    .register({
        UserService: asClass(UserService).singleton()
    })
    .register({
        UserBusiness: asClass(UserBusiness).singleton()
    })
    .register({
        UserRepository: asClass(UserRepository).singleton()
    })
    .register({
        AuthRoutes: asFunction(AuthRoutes).singleton()
    })
    .register({
        authMiddleware: asValue(authMiddleware)
    })

module.exports = container;