import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addActivityToDB = async (data: any) => {
    const d = await prisma.activity.create({
        data
    })
    return;
}

export default addActivityToDB;