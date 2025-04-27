/*
  Warnings:

  - You are about to drop the column `code` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `cityIATACode` on the `City` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[IATAcode]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `IATAcode` to the `Airport` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Airport_code_key` ON `Airport`;

-- DropIndex
DROP INDEX `City_cityIATACode_stateCountryKey_key` ON `City`;

-- AlterTable
ALTER TABLE `Airport` DROP COLUMN `code`,
    ADD COLUMN `IATAcode` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `City` DROP COLUMN `cityIATACode`;

-- CreateIndex
CREATE UNIQUE INDEX `Airport_IATAcode_key` ON `Airport`(`IATAcode`);
