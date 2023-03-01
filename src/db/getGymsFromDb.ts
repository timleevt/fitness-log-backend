import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getGymsFromDB = async () => {
  return await prisma.gym.findMany({
    orderBy: {
      id: 'desc'
    }
  });
};

export default getGymsFromDB;
