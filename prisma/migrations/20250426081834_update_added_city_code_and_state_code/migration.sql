/*
  Warnings:

  - You are about to drop the column `cityCode` on the `State` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `City` ADD COLUMN `cityCode` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `State` DROP COLUMN `cityCode`,
    ADD COLUMN `stateCode` VARCHAR(191) NULL;
