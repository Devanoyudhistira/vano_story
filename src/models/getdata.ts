"use server"
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
const password = process.env.NEXT_MONGO_PASSWORD;
const uri:string = process.env.NEXT_MONGO_PASSWORD;
const client = new MongoClient(process.env.NEXT_MONGO_PASSWORD, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

type Blog = {
  _id: ObjectId;
  Author: string;
  Date_created: string;
  Language: string;
  Like: number;
  Thumbnail: string;
  Title: string;
  Topic_genre: string;
  View_count: number;

  Content: {
    type: string;
    content?: {
      type: string;
      content?: {
        type: string;
        text?: string;
      }[];
    }[];
  };
};



async function getdata() {
  try {
    await client.connect();
    const connection = await client.db("devastory").collection<Blog>("blogs").find({}).toArray();    
    return connection
  } finally {
    await client.close();
  }
}
export default getdata;
