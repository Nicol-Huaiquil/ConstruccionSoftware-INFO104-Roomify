import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  let uId = req.body.uId;

  const db = await dbConnection;
  const collection = db.collection("profiles");
  const uBookmarked = await collection.findOne({ id: uId });

  res.send(uBookmarked.uBookmarked);
};
