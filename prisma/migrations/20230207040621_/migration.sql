-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "activity" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gym" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "location" TEXT NOT NULL,
    "type" TEXT,
    "website" TEXT,

    CONSTRAINT "Gym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompRecord" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "division" TEXT NOT NULL,
    "weightClass" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "result" TEXT NOT NULL,
    "method" TEXT NOT NULL,

    CONSTRAINT "CompRecord_pkey" PRIMARY KEY ("id")
);
