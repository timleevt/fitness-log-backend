import { Request, Response } from "express";
import addActivityToDB from "../db/addActivityToDB";

const handlePostActivity = async (req: Request, res: Response) => {
  const { activity, date, duration, notes } = req.body;

  // Sanitizing the input
  if (!activity || typeof activity !== "string") return res.sendStatus(400);

  if (!date) return res.sendStatus(400);

  if (!duration || typeof duration !== "number") return res.sendStatus(400);

  if (!notes || typeof notes !== "string") return res.sendStatus(400);

  const reqParams = {
    activity,
    date: new Date(date).toISOString(),
    duration,
    notes,
  };

  try {
    await addActivityToDB(reqParams);
    return res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
};

export default handlePostActivity;
