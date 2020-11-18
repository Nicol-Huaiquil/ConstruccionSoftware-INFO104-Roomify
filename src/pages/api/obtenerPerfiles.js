import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  const db = await dbConnection;
  const collection = db.collection("perfiles");
  await collection.deleteMany({});
  await collection.insertMany([
    { id: 1, edad: 21, nombre: "Isla Teja" },
    { id: 2, edad: 19, nombre: "Isla Teja" },
    { id: 3, edad: 20, nombre: "Miraflores" },
  ]);
  const perfiles = await collection.find({}).toArray();
  res.send(perfiles);
};
