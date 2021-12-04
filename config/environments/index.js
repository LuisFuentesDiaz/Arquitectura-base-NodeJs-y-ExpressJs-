require("dotenv").config();

const DEVELOPMENT = require('./development');

const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV == "development") {
    currentEnv = DEVELOPMENT;
}
module.exports = currentEnv;