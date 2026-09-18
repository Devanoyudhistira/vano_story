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

export type Userprops = {
  _id: ObjectId;
  Name: string;
  Profile_image: string;
  Description: string;
  Category: Array<string>;
};

async function getonedata(query: string) {
  await client.connect();
  const connection = await client
    .db("devastory")
    .collection<Blog>("blogs")
    .findOne({ _id: new ObjectId(query) });
  return connection;
}
export async function getoneuserdata(query: string) {
  await client.connect();
  const connection = await client
    .db("devastory")
    .collection<Userprops>("users")
    .findOne({ Email: query });
  return connection;
}
export async function getoneuserdatabyid(query: string) {
  await client.connect();
  const connection = await client
    .db("devastory")
    .collection<Userprops>("users")
    .findOne({ _id: new ObjectId(query) });
  return connection;
}
export default getonedata;
