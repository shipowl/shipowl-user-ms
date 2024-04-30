import { Sequelize } from "sequelize";

let sequelize: any;
export const initDb = async () => {
  try {
    await new Promise(async (resolve, reject) => {
      sequelize = new Sequelize(
        process.env.DB_NAME as string,
        process.env.DB_USERNAME as string,
        process.env.DB_PASSWORD as string,
        {
          host: process.env.DB_HOST,
          dialect: "mysql",
          logging: process.env.NODE_ENV === "development" ? true : false,
          pool: {
            max: 100,
            min: 2,
            acquire: 1000000,
            idle: 200000,
          },
        }
      );

      await sequelize.authenticate().then().catch(reject).finally(resolve);
    });
    console.log("Connected to Mysql DB");
  } catch (error) {
    console.log("Error syncing db models: ", error);
  }
};
export default () => sequelize;
