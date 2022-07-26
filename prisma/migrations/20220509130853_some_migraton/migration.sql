/*
  Warnings:

  - You are about to drop the column `adopterId` on the `Pets` table. All the data in the column will be lost.
  - Added the required column `petId` to the `Adopter` table without a default value. This is not possible if the table is not empty.

*/
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
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Pets" ("age", "breed", "createdAt", "description", "gender", "id", "isAdopted", "name", "pic", "type", "updateAt") SELECT "age", "breed", "createdAt", "description", "gender", "id", "isAdopted", "name", "pic", "type", "updateAt" FROM "Pets";
DROP TABLE "Pets";
ALTER TABLE "new_Pets" RENAME TO "Pets";
CREATE TABLE "new_Adopter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "aadhar" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "petId" TEXT NOT NULL,
    CONSTRAINT "Adopter_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Adopter" ("aadhar", "address", "contact", "createdAt", "email", "id", "name", "occupation", "updateAt") SELECT "aadhar", "address", "contact", "createdAt", "email", "id", "name", "occupation", "updateAt" FROM "Adopter";
DROP TABLE "Adopter";
ALTER TABLE "new_Adopter" RENAME TO "Adopter";
CREATE UNIQUE INDEX "Adopter_petId_key" ON "Adopter"("petId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
