import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  const { id_ejecutivo } = req.body;
  const db = await dbConnection;

  const collection = db.collection(`clientes_${id_ejecutivo}`);

  res.send(await collection.find({}).toArray());
};
