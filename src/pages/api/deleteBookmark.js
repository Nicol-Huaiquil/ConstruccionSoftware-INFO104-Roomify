import { isUndefined } from "lodash";
import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async (req, res) => {
  let uId = req.body.uId;
  let id = req.body.id;

  if (isUndefined(id)) {
    res.send(false);
  } else {
    const db = await dbConnection;
    const collection = db.collection("profiles");
    const profiles = await collection.find({}).toArray();

    // Búsqueda del perfil del usuario que quiere eliminar un perfil guardado
    let i = 0;
    while (profiles[i].id != uId) i++;

    let n = profiles[i].bookmarked.length;

    // Búsqueda del id del perfil a eliminar
    let j = 0;
    while (j < n && profiles[i].bookmarked[j] != id) j++;

    // Eliminación de la id
    /*for (let k = 0; k < n; k++) {
      console.log(profiles[i].bookmarked[k]);
    }*/
    if (j != n) {
      //console.log("aquí es cuando elimina. ID = " + id + "  -  index = " + j);
      profiles[i].bookmarked.splice(j, 1);
    }
    /*console.log("eliminado.");
    for (let h = 0; h < profiles[i].bookmarked.length; h++) {
      console.log(profiles[i].bookmarked[h]);
    }*/

    // Sobreescritura de la base de datos (horrible)
    await collection.deleteMany({});
    await collection.insertMany(profiles);

    res.send(true);
  }
};
