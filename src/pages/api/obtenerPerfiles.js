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
  const uProfile = await collection.findOne({ id: uId });
  const uPreferences = uProfile.preferences;

  let filter = {};

  if (uProfile.preferences.sameCampus != "a")
    filter = { ...filter, campus: uProfile.preferences.sameCampus };

  if (uProfile.preferences.profilesWithCabin != "a")
    filter = {
      ...filter,
      hasCabin: uProfile.preferences.profilesWithCabin === "s" ? true : false,
    };

  const profiles = await collection.find(filter).toArray();

  let selectedProfiles = [];

  for (let i = 0; i < profiles.length; i++) {
    if (
      profiles[i].age < uPreferences.ageRange[0] ||
      profiles[i].age > uPreferences.ageRange[1]
    )
      continue;
    if (profiles[i].id === uId) continue;
    selectedProfiles.push(profiles[i]);
  }

  res.send(selectedProfiles);

  /*
  if (
    uProfile.preferences.sameCampus != "a" &&
    uProfile.preferences.profilesWithCabin != "a"
  ) {
    const profiles = await collection
      .find({ campus: uProfile.preferences.sameCampus })
      .toArray();
    res.send(profiles);
  } else {
    const profiles = await collection.find({}).toArray();
    res.send(profiles);
  }
*/
  /*
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
  }*/
};
