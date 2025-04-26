/*
  Warnings:

  - You are about to drop the column `cityCode` on the `City` table. All the data in the column will be lost.
  - Added the required column `cityIATACode` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `City_cityCode_key` ON `City`;

-- AlterTable
ALTER TABLE `City` DROP COLUMN `cityCode`,
    ADD COLUMN `cityIATACode` VARCHAR(191) NOT NULL;
