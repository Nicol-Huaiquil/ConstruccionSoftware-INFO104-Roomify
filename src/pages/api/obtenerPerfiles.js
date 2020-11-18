import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

let listaDePerfiles = [
  {
    id: "23497",
    name: "Andrés Torres",
    age: 21,
    campus: "Isla Teja",
    hasCabin: true,
    preferences: {
      ageRange: [18, 24],
      campus: "Miraflores",
      hasCabin: false,
    },
  },
  {
    id: "28398",
    name: "Daniel Díaz",
    age: 19,
    campus: "Miraflores",
    hasCabin: true,
    preferences: {
      ageRange: [18, 24],
      campus: "Miraflores",
      hasCabin: false,
    },
  },
  {
    id: "98247",
    name: "Nicol Huaiquil",
    age: 23,
    campus: "Miraflores",
    hasCabin: false,
    preferences: {
      ageRange: [18, 24],
      campus: "Miraflores",
      hasCabin: true,
    },
  },
  {
    id: "28374",
    name: "Gustavo Reyes",
    age: 21,
    campus: "Miraflores",
    hasCabin: false,
    preferences: {
      ageRange: [18, 24],
      campus: "Miraflores",
      hasCabin: true,
    },
  },
  {
    id: "24836",
    name: "Rodolfo Seguel",
    age: 18,
    campus: "Isla Teja",
    hasCabin: false,
    preferences: {
      ageRange: [18, 21],
      campus: "Isla Teja",
      hasCabin: true,
    },
  },
];

export default async (req, res) => {
  let uId = req.body.uId;
  let perfilesSeleccionados = [];

  let i = 0;
  while (listaDePerfiles[i].id != uId) i++;
  let uProfile = listaDePerfiles.splice(i);
  let uPreferences = uProfile[0].preferences;

  for (let i = 0; i < listaDePerfiles.length; i++) {
    if (
      listaDePerfiles[i].age < uPreferences.ageRange[0] ||
      listaDePerfiles[i].age > uPreferences.ageRange[1]
    )
      continue;
    if (listaDePerfiles[i].campus != uPreferences.campus) continue;
    if (listaDePerfiles[i].hasCabin ^ uPreferences.hasCabin) continue;
    perfilesSeleccionados.push(listaDePerfiles[i]);
  }

  const db = await dbConnection;
  const collection = db.collection("perfiles");
  await collection.deleteMany({});
  await collection.insertMany(perfilesSeleccionados);
  const perfiles = await collection.find({}).toArray();
  res.send(perfiles);
};
