import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const db = await dbConnection;
  const collection = db.collection("users");
  const user = await collection.findOne({ email: email });

  if (user && password === user.password) res.send(user.id);
  else res.send(false);
};
