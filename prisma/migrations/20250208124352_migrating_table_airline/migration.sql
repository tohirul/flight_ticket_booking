/*
  Warnings:

  - Added the required column `airlineId` to the `Airplane` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Airplane` ADD COLUMN `airlineId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Airline` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Airplane` ADD CONSTRAINT `Airplane_airlineId_fkey` FOREIGN KEY (`airlineId`) REFERENCES `Airline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
