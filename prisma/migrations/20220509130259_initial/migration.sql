/*
  Warnings:

  - Added the required column `age` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breed` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAdopted` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Adopter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "aadhar" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "isAdopted" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "adopterId" TEXT,
    CONSTRAINT "Pets_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "Adopter" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pets" ("createdAt", "gender", "id", "name", "pic", "type", "updateAt") SELECT "createdAt", "gender", "id", "name", "pic", "type", "updateAt" FROM "Pets";
DROP TABLE "Pets";
ALTER TABLE "new_Pets" RENAME TO "Pets";
CREATE UNIQUE INDEX "Pets_adopterId_key" ON "Pets"("adopterId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
