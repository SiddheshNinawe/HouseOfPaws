/*
  Warnings:

  - Added the required column `gender` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pic` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Pets" ("createdAt", "id", "name", "type", "updateAt") SELECT "createdAt", "id", "name", "type", "updateAt" FROM "Pets";
DROP TABLE "Pets";
ALTER TABLE "new_Pets" RENAME TO "Pets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
