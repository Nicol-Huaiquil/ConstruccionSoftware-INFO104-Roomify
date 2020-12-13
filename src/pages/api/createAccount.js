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
  const newBookmarked = req.body.bookmarked;
  const newGlobalData = req.body.globalData;

  const newId = (10000 + newGlobalData.n).toString();

  newUser.id = newId;
  newProfile.id = newId;
  newPreferences.id = newId;
  newBookmarked.id = newId;

  newGlobalData.n += 1;

  const db = await dbConnection;
  const users = db.collection("users");
  const profiles = db.collection("profiles");
  const usersPreferences = db.collection("usersPreferences");
  const usersBookmarked = db.collection("usersBookmarked");
  const globalData = db.collection("globalData");

  users.insertOne(newUser);
  profiles.insertOne(newProfile);
  usersPreferences.insertOne(newPreferences);
  usersBookmarked.insertOne(newBookmarked);
  globalData.deleteMany({});
  globalData.insertOne(newGlobalData);

  res.send(true);
};
