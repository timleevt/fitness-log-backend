import { Request, Response } from 'express';
import getGymsFromDB from '../db/getGymsFromDB';


const handleGetGyms = async (req: Request, res: Response) => {
    return res.send(await getGymsFromDB());
}

export default handleGetGyms;