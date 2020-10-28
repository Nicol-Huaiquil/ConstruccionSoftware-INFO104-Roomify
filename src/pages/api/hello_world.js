import { NextApiResponse, NextApiRequest } from "next";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  // POST
  req.body;
  console.log(`Body = "${JSON.stringify(req.body)}"`);
  console.log("Mi nombre es: ", req.body.nombre);

  res.send("Hello world from API, I guess you are: " + req.body.nombre);
};
