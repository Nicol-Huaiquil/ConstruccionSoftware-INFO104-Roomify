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
  let uProfile = profiles.splice(i)[0];
  let uPreferences = uProfile.preferences;

  for (let i = 0; i < profiles.length; i++) {
    if (
      profiles[i].age < uPreferences.ageRange[0] ||
      profiles[i].age > uPreferences.ageRange[1]
    )
      continue;
    console.log(uPreferences.ageRange[0], uPreferences.ageRange[1]);
    if (
      uPreferences.sameCampus != "a" &&
      uPreferences.sameCampus != profiles[i].campus
    )
      continue;

    if (uPreferences.profilesWithCabin != "a") {
      if (
        (uPreferences.profilesWithCabin == "s" && !profiles[i].hasCabin) ||
        (uPreferences.profilesWithCabin == "n" && profiles[i].hasCabin)
      ) {
        continue;
      }
    }

    selectedProfiles.push(profiles[i]);
    console.log("agregado " + i);
  }

  res.send(selectedProfiles);
};
