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
  const collection = db.collection("profiles");
  const profiles = await collection.find({}).toArray();

  let i = 0;
  while (profiles[i].id != uId) i++;

  let bookmarked = profiles[i].bookmarked;
  let n = bookmarked.length;

  i = 0;
  let selectedProfiles = [];
  while (n != 0) {
    if (bookmarked.includes(profiles[i].id)) {
      selectedProfiles.push(profiles[i]);
      n--;
    }
    i++;
  }

  res.send(selectedProfiles);
};
