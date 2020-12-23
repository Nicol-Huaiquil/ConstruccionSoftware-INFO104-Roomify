import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  const id = req.body.id;

  const db = await dbConnection;
  const collection = db.collection("profiles");
  const profile = await collection.findOne({ id: id });

  res.send(profile);
};
