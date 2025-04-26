/*
  Warnings:

  - A unique constraint covering the columns `[name,stateCountryKey]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cityIATACode,stateCountryKey]` on the table `City` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `City_cityIATACode_countryId_stateId_key` ON `City`;

-- DropIndex
DROP INDEX `City_name_countryId_stateId_key` ON `City`;

-- AlterTable
ALTER TABLE `City` ADD COLUMN `stateCountryKey` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `City_name_stateCountryKey_key` ON `City`(`name`, `stateCountryKey`);

-- CreateIndex
CREATE UNIQUE INDEX `City_cityIATACode_stateCountryKey_key` ON `City`(`cityIATACode`, `stateCountryKey`);
