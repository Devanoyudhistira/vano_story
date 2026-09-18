"use server";
import { MongoClient, ServerApiVersion } from "mongodb";
const uri: string = process.env.NEXT_MONGO_PASSWORD!;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const users = client.db("devastory").collection("users");
await users.createIndex({ email: 1 }, { unique: true });

export async function create(objectdata: object) {  
    await client.connect();

    const insertdata = await users.insertOne(objectdata);

    console.log(insertdata.acknowledged);      
}
