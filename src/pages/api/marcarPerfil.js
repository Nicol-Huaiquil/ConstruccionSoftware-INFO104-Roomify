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
    const collection = db.collection("usersBookmarked");
    const uBookmarked = await collection.findOne({ id: uId });

    if (!uBookmarked.bookmarked.includes(id)) uBookmarked.push(id);

    const auxConst = await collection.updateOne(
      { id: uId },
      { $set: uBookmarked },
      {}
    );

    res.send(true);
  }
};
