import { PrismaClient } from "@prisma/client";
import GYM_DATA from "./seed/gym";
import ACTIVITY_DATA from "./seed/activity";
import COMP_DATA from "./seed/comp";

const prisma = new PrismaClient();

async function main() {
  // TODO FIX: Unsure why some fields still show up as mandatory
  GYM_DATA.forEach(async (gym) => {
    await prisma.gym.create({
      data: {
        id: gym.id,
        name: gym.name,
        notes: gym.notes,
        location: gym.location,
        type: gym.type || "",
        website: gym.website || "",
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
