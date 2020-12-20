import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";
import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage("./scratch");

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
  localStorage.setItem("id", user.id);

  if (user && password === user.password) res.send(true);
  else res.send(false);
};
