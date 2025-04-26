/*
  Warnings:

  - You are about to drop the column `province` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `City` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `City` DROP COLUMN `province`,
    DROP COLUMN `state`,
    ADD COLUMN `stateId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `State` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cityCode` VARCHAR(191) NULL,
    `countryId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `State` ADD CONSTRAINT `State_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `City_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `State`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
