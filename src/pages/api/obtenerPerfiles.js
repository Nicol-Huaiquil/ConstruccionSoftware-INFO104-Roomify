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

  let selectedProfiles = [];

  let i = 0;
  while (profiles[i].id != uId) i++;
  let uProfile = profiles.splice(i);
  let uPreferences = uProfile[0].preferences;

  for (let i = 0; i < profiles.length; i++) {
    if (
      profiles[i].age < uPreferences.ageRange[0] ||
      profiles[i].age > uPreferences.ageRange[1]
    )
      continue;
    /*
    if (
      (profiles[i].campus != uProfile.campus && uPreferences.sameCampus) ||
      (profiles[i].campus == uProfile.campus && ~uPreferences.sameCampus)
    )
      continue;
    */
    if (profiles[i].hasCabin ^ uPreferences.hasCabin) continue;
    selectedProfiles.push(profiles[i]);
  }

  res.send(selectedProfiles);
};
