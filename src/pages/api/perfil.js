import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @aparam {NextApiRequest} req
 * @aparam {NextApiResponse} res
 */
export default async (req, res) => {
  const { id_estudiante } = req.body;
  const db = await dbConnection;

  const collection = db.collection("perfiles_${id_estudiante}");

  res.send(await collection.find({}).toArray());
};
