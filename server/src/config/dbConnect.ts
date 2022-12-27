import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "sequelize",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
export const dbConnect = async () => {
    await AppDataSource.initialize().then(async () => {

        console.log("connect to Database success")

    }).catch(error => console.log(error))
}