/*
  Warnings:

  - A unique constraint covering the columns `[name,countryId,stateId]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cityIATACode,countryId,stateId]` on the table `City` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `City_name_countryId_stateId_key` ON `City`(`name`, `countryId`, `stateId`);

-- CreateIndex
CREATE UNIQUE INDEX `City_cityIATACode_countryId_stateId_key` ON `City`(`cityIATACode`, `countryId`, `stateId`);
