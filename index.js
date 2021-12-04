const container = require('./api/container');
const application = container.resolve("app");
const db = container.resolve('db');

application.start().then(async () => {
    db.sequelize.sync({ alter: true, force: false }).then(() => {
        console.log("tablas sincronizadas");
    });
}).catch(err => {
    console.log(err);
    process.exit();
})