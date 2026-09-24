"use server";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
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

export async function update(id: string, objectdata: object) {
    await client.connect();

    const replacedata = await users.replaceOne(
        { _id: new ObjectId(id) },
        objectdata
    );

    console.log(replacedata.acknowledged);
}


const blogs = client.db("devastory").collection("blogs");
// await users.createIndex({ email: 1 }, { unique: true });

export async function createblog(objectdata: object) {  
    await client.connect();

    const insertdata = await blogs.insertOne(objectdata);

    return insertdata.acknowledged      
}

export async function deleteblog(id: string): Promise<boolean> {
  await client.connect();

  const result = await blogs.deleteOne({
    _id: new ObjectId(id),
  });

  return result.deletedCount === 1;
}

