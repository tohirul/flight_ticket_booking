/*
  Warnings:

  - A unique constraint covering the columns `[name,countryId]` on the table `State` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stateCode,countryId]` on the table `State` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `State_name_countryId_key` ON `State`(`name`, `countryId`);

-- CreateIndex
CREATE UNIQUE INDEX `State_stateCode_countryId_key` ON `State`(`stateCode`, `countryId`);

-- RenameIndex
ALTER TABLE `State` RENAME INDEX `State_countryId_fkey` TO `State_countryId_idx`;
