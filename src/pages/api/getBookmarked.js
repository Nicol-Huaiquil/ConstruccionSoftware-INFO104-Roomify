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
  const collection1 = db.collection("usersBookmarked");
  const collection2 = db.collection("profiles");
  const uBookmarked = await collection1.findOne({ id: uId });

  const profiles = await collection2.find({}).toArray();

  let selectedProfiles = [];
  let count = 0;
  let i = 0;

  // *por modificar*
  while (count < uBookmarked.bookmarked.length) {
    if (uBookmarked.bookmarked.includes(profiles[i].id)) {
      selectedProfiles.push(profiles[i]);
      count++;
    }
    i++;
  }
  // * *

  res.send(selectedProfiles);
};
