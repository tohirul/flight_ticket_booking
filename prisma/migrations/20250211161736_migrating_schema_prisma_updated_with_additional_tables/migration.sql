/*
  Warnings:

  - You are about to drop the column `country` on the `Airline` table. All the data in the column will be lost.
  - You are about to alter the column `year` on the `Airplane` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `fuelType` on the `Airplane` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to drop the column `city` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Airport` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Passenger` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Passenger` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryId` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityId` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `Passenger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Airline` DROP COLUMN `country`,
    ADD COLUMN `countryId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Airplane` MODIFY `year` INTEGER NOT NULL,
    MODIFY `fuelType` ENUM('JetA', 'JetA1', 'JetB', 'Avgas', 'Turboprop', 'Propeller', 'Rocket', 'Biofuel', 'Electric') NOT NULL;

-- AlterTable
ALTER TABLE `Airport` DROP COLUMN `city`,
    DROP COLUMN `country`,
    ADD COLUMN `cityId` VARCHAR(191) NOT NULL,
    ADD COLUMN `countryId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Passenger` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `bookingDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dateOfBirth` DATETIME(3) NOT NULL,
    ADD COLUMN `emergencyContact` VARCHAR(191) NULL,
    ADD COLUMN `emergencyPhone` VARCHAR(191) NULL,
    ADD COLUMN `frequentFlyer` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `gender` VARCHAR(191) NULL,
    ADD COLUMN `mealPreference` VARCHAR(191) NULL,
    ADD COLUMN `nationality` VARCHAR(191) NULL,
    ADD COLUMN `passportNumber` VARCHAR(191) NULL,
    ADD COLUMN `specialRequirements` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Country` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `countryCode` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Country_countryCode_key`(`countryCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `City` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NULL,
    `province` VARCHAR(191) NULL,
    `countryId` VARCHAR(191) NOT NULL,

    INDEX `City_name_countryId_idx`(`name`, `countryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Airline_countryId_idx` ON `Airline`(`countryId`);

-- CreateIndex
CREATE UNIQUE INDEX `Airport_code_key` ON `Airport`(`code`);

-- CreateIndex
CREATE UNIQUE INDEX `Passenger_email_key` ON `Passenger`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Passenger_phone_key` ON `Passenger`(`phone`);

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `City_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airline` ADD CONSTRAINT `Airline_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Airplane` RENAME INDEX `Airplane_airlineId_fkey` TO `Airplane_airlineId_idx`;

-- RenameIndex
ALTER TABLE `Flight` RENAME INDEX `Flight_airlineId_fkey` TO `Flight_airlineId_idx`;

-- RenameIndex
ALTER TABLE `Flight` RENAME INDEX `Flight_airplaneId_fkey` TO `Flight_airplaneId_idx`;
