/*
  Warnings:

  - Made the column `cityCode` on table `City` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `City` MODIFY `cityCode` VARCHAR(191) NOT NULL;
