import { MongoClient, ServerApiVersion } from "mongodb";
const password = process.env.NEXT_MONGO_PASSWORD;
const uri = `mongodb://devanotira:${password}@cluster0-shard-00-00.iovms.mongodb.net:27017,cluster0-shard-00-01.iovms.mongodb.net:27017,cluster0-shard-00-02.iovms.mongodb.net:27017/?ssl=true&replicaSet=atlas-q270ag-shard-0&authSource=admin&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
    await client.connect();
    const connection = await client.db("devastory").collection("blogs");
    console.log(await connection.find({}).toArray());  
}
export default run;
