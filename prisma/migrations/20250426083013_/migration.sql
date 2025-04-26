/*
  Warnings:

  - A unique constraint covering the columns `[cityCode]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `City` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `City_cityCode_key` ON `City`(`cityCode`);
