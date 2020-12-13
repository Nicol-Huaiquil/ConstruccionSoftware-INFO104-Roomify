import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  const { _id, ...preferences } = req.body;

  const db = await dbConnection;
  const collection = db.collection("usersPreferences");
  const auxConst = await collection.updateOne(
    { id: preferences.id },
    { $set: preferences },
    {}
  );

  res.send(auxConst);
};
