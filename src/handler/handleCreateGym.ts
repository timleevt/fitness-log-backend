import { Request, Response } from 'express';
import addGymToDB from '../db/addGymToDb';


const handleCreateGym = async (req: Request, res: Response) => {
    const data = req.body;
    await addGymToDB(data);
    res.send(200);
}

export default handleCreateGym;