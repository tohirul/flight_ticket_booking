/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,countryCode]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Made the column `address` on table `Passenger` required. This step will fail if there are existing NULL values in that column.
  - Made the column `emergencyContact` on table `Passenger` required. This step will fail if there are existing NULL values in that column.
  - Made the column `emergencyPhone` on table `Passenger` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `Passenger` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nationality` on table `Passenger` required. This step will fail if there are existing NULL values in that column.
  - Made the column `passportNumber` on table `Passenger` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Airline` DROP FOREIGN KEY `Airline_countryId_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_flightId_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_passengerId_fkey`;

-- DropForeignKey
ALTER TABLE `Flight` DROP FOREIGN KEY `Flight_fromAirportId_fkey`;

-- DropForeignKey
ALTER TABLE `Flight` DROP FOREIGN KEY `Flight_toAirportId_fkey`;

-- DropForeignKey
ALTER TABLE `State` DROP FOREIGN KEY `State_countryId_fkey`;

-- DropIndex
DROP INDEX `Flight_fromAirportId_fkey` ON `Flight`;

-- DropIndex
DROP INDEX `Flight_toAirportId_fkey` ON `Flight`;

-- AlterTable
ALTER TABLE `Passenger` MODIFY `address` VARCHAR(191) NOT NULL,
    MODIFY `emergencyContact` VARCHAR(191) NOT NULL,
    MODIFY `emergencyPhone` VARCHAR(191) NOT NULL,
    MODIFY `gender` ENUM('Male', 'Female', 'Other', 'PreferNotToSay') NOT NULL,
    MODIFY `nationality` VARCHAR(191) NOT NULL,
    MODIFY `passportNumber` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Country_name_key` ON `Country`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Country_name_countryCode_key` ON `Country`(`name`, `countryCode`);

-- AddForeignKey
ALTER TABLE `State` ADD CONSTRAINT `State_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airline` ADD CONSTRAINT `Airline_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_fromAirportId_fkey` FOREIGN KEY (`fromAirportId`) REFERENCES `Airport`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_toAirportId_fkey` FOREIGN KEY (`toAirportId`) REFERENCES `Airport`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_flightId_fkey` FOREIGN KEY (`flightId`) REFERENCES `Flight`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
