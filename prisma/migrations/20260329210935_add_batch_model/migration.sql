-- CreateTable
CREATE TABLE "Batch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "days" TEXT,
    "time" TEXT,
    "soldOut" BOOLEAN NOT NULL DEFAULT false
);
