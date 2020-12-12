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

  const db = await dbConnection;
  const users = db.collection("users");
  const profiles = db.collection("profiles");
  const userPreferences = db.collection("userPreferences");

  users.insertOne(newUser);
  profiles.insertOne(newProfile);
  userPreferences.insertOne(newPreferences);

  res.send(true);
};
