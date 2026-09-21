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

type User = {
  _id: ObjectId;
  Email: string;
  Name: string;
  Profile_image: string;
  Description: string;
  Category: string[];
};

async function getalldata(pagenumber: string) {
    console.log(pagenumber)
    await client.connect();
    const connection = await client
      .db("devastory")
      .collection<Blog>("blogs")
      .find({})     
      .sort({ Date_created: -1 })
      .toArray();
    return connection; 
}
export async function getalluser() {    
    await client.connect();
    const connection = await client
      .db("devastory")
      .collection<User>("users")
      .find({})     
      .sort({ Date_created: -1 })
      .toArray();
    return connection; 
}

export default getalldata;
