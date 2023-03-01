import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// type data = {
//     id: Number;
//   name: String;
//   notes: String;
//   location: String;
//   type: String;
//   website?: String;
// };

const addGymToDB = async (data: any) => {
  const d = await prisma.gym.create({
    // data: {
    //   name: "Kaizen MMA Fairfaxzz",
    //   notes: "Started BJJ here in Mar 2018",
    //   location: "Fairfax, VA USA",
    //   type: "main",
    //   website: "https://kzmma.com/",
    // },
    data
  });
};

export default addGymToDB;
