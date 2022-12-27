"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "sequelize",
    synchronize: true,
    logging: false,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
const dbConnect = async () => {
    await AppDataSource.initialize().then(async () => {
        console.log("connect to Database success");
    }).catch(error => console.log(error));
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=dbConnect.js.map