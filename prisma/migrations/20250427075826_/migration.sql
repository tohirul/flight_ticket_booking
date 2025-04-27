/*
  Warnings:

  - A unique constraint covering the columns `[IATAcode,cityId,stateId,countryId]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stateId` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Made the column `stateCode` on table `State` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Airport` ADD COLUMN `stateId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `State` MODIFY `stateCode` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Airport_stateId_idx` ON `Airport`(`stateId`);

-- CreateIndex
CREATE UNIQUE INDEX `Airport_IATAcode_cityId_stateId_countryId_key` ON `Airport`(`IATAcode`, `cityId`, `stateId`, `countryId`);

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `State`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
