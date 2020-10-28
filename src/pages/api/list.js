import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  const db = await dbConnection;

  const collection = db.collection("testing");

  //   await collection.deleteMany({});

  await collection.insertOne({
    hello: "world",
    date: new Date(),
  });

  res.send(JSON.stringify(await collection.find({}).toArray()));
};
