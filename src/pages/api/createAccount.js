import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  const newUser = req.body.user;
  const newProfile = req.body.profile;
  const newPreferences = req.body.preferences;
  const newBookmarked = req.body.bokkmarked;

  const db = await dbConnection;
  const users = db.collection("users");
  const profiles = db.collection("profiles");
  const usersPreferences = db.collection("usersPreferences");
  const usersBookmarked = db.collection("usersBookmarked");

  users.insertOne(newUser);
  profiles.insertOne(newProfile);
  usersPreferences.insertOne(newPreferences);
  usersBookmarked.insertOne(newBookmarked;)

  res.send(true);
};
