"use server";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import getuser from "./profile";
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

async function getdata(pagenumber: string) {
  const page = pagenumber;
  const limit = 6;

  const skip = (Number(page) - 1) * limit;
  await client.connect();
  const connection = await client
    .db("devastory")
    .collection<Blog>("blogs")
    .find({})
    .skip(skip)
    .limit(limit)
    .sort({ Date_created: -1 })
    .toArray();
  return connection;
}
export async function getdatabytitle(pagenumber: string, search: string) {
  const page = Number(pagenumber);
  const limit = 6;
  const skip = (page - 1) * limit;

  await client.connect();

  const connection = await client
    .db("devastory")
    .collection<Blog>("blogs")
    .find({
      Title: {
        $regex: search,
        $options: "i",
      },
    })
    .sort({ Date_created: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  return connection;
}

export async function getdatafromuser(pagenumber: string, userid: string) {
  const page = pagenumber;
  const limit = 6;
  const skip = (Number(page) - 1) * limit;

  await client.connect();
  const connection = await client
    .db("devastory")
    .collection<Blog>("blogs")
    .find({ Author: userid })
    .skip(skip)
    .limit(limit)
    .sort({ Date_created: -1 })
    .toArray();
  return connection;
}

export async function getcountdata(): Promise<number> {
  await client.connect();
  const collection = client.db("devastory").collection("blogs");
  console.log(Math.ceil((await collection.countDocuments({})) / 6));

  return collection.countDocuments({});
}
export async function getcountdatafromuser(userid: string): Promise<number> {
  await client.connect();

  const collection = client.db("devastory").collection("blogs");

  const count = await collection.countDocuments({
    Author: userid,
  });

  console.log(Math.ceil(count / 6));

  return count;
}

export default getdata;
