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

    let n = profiles.length;

    let i = 0;
    while (profiles[i].id != uId) i++;

    let m = 0;
    while (!isUndefined(profiles[i].bookmarked[m])) m++;

    let j = 0;
    while (j < m && profiles[i].bookmarked[j] != id) j++;

    let k = 0;
    while (!isUndefined(profiles[i].bookmarked[k])) {
      console.log(profiles[i].bookmarked[k]);
      k++;
    }

    console.log("k = " + k);

    if (k > 3) {
      profiles[i].bookmarked = [];
      console.log("-reset-");
    }

    if (j == m) {
      profiles[i].bookmarked.push(id);
      console.log("¡Agregado!");
    }

    await collection.deleteMany({});
    await collection.insertMany(profiles);

    console.log(".\n");

    res.send(true);
  }
};
