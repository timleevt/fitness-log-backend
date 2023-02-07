import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const d = await prisma.gym.create({
    data: {
      id: 1,
      name: "Kaizen MMA Fairfax",
      notes: "Started BJJ here in Mar 2018",
      location: "Fairfax, VA USA",
      type: "main",
      website: "https://kzmma.com/",
    },
  });
  console.log(d);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => await prisma.$disconnect());
