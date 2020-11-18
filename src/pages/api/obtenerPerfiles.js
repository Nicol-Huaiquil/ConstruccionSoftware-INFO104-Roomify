import { NextApiResponse, NextApiRequest } from "next";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  req.body;
  let perfil1 = [21, "Isla Teja"];
  let perfil2 = [20, "Isla Teja"];
  let perfil3 = [19, "Miraflores"];
  let perfiles = [perfil1, perfil2, perfil3];
  res.send(perfiles);
};
