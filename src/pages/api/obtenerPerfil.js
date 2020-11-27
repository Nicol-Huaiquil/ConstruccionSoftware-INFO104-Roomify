import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  let id = req.body.id;

  const db = await dbConnection;
  const collection = db.collection("profiles");
  const profiles = await collection.find({}).toArray();

  let i = 0;
  while (profiles[i].id != id) i++;

  res.send(profiles[i]);
};
