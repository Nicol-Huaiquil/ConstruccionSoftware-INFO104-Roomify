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
  const collection1 = db.collection("profiles");
  const collection2 = db.collection("usersPreferences");

  // obtiene las preferencias del usuario
  const uPreferences = await collection2.findOne({ id: uId });

  // crea el filtro según las preferencias del usuario
  let filter = {};
  if (uPreferences.profilesFromCampus != "a")
    filter = { ...filter, campus: uPreferences.profilesFromCampus };
  if (uPreferences.profilesWithCabin != "a")
    filter = {
      ...filter,
      hasCabin: uPreferences.profilesWithCabin === "s" ? true : false,
    };

  // obtiene los perfiles utilizando el filtro
  const profiles = await collection1.find(filter).toArray();

  // filtra por edad y verifica que el usuario no esté incluido en los perfiles seleccionados
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
};
