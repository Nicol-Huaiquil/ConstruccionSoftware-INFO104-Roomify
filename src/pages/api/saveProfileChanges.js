import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  const { _id, ...perfilModificado } = req.body;

  const db = await dbConnection;
  const collection = db.collection("profiles");
  const profile = await collection.updateOne(
    { id: perfilModificado.id },
    { $set: perfilModificado },
    {}
  );

  res.send(profile);
};
