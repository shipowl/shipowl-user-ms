// const { MongoClient, ServerApiVersion } = require("mongodb");
// import L from "../common/logger";
// import getConfig from "../config";
// const config = getConfig();

// const client = new MongoClient(config.MONGO_DB.URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   return "Connected successfully to mongo server";
// }

// main()
//   .then((res) => L.info(res))
//   .catch((err) => L.error("Mongo connection errro", err))
//   .finally();

// export const connection = (dbName: string) => {
//   return client.db(dbName);
// };
