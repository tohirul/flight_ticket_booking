/*
  Warnings:

  - You are about to drop the column `engineConfiguration` on the `Airplane` table. All the data in the column will be lost.
  - You are about to drop the column `engineType` on the `Airplane` table. All the data in the column will be lost.
  - You are about to drop the column `engines` on the `Airplane` table. All the data in the column will be lost.
  - You are about to drop the column `fuelType` on the `Airplane` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Airplane` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[flightNumber]` on the table `Flight` will be added. If there are existing duplicate values, this will fail.
  - Made the column `countryId` on table `Airport` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `arrivalTime` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureTime` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flightNumber` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flightStatus` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromAirportId` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toAirportId` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Airport` DROP FOREIGN KEY `Airport_countryId_fkey`;

-- DropIndex
DROP INDEX `Airport_countryId_fkey` ON `Airport`;

-- AlterTable
ALTER TABLE `Airplane` DROP COLUMN `engineConfiguration`,
    DROP COLUMN `engineType`,
    DROP COLUMN `engines`,
    DROP COLUMN `fuelType`,
    DROP COLUMN `speed`;

-- AlterTable
ALTER TABLE `Airport` MODIFY `countryId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Flight` ADD COLUMN `arrivalTime` DATETIME(3) NOT NULL,
    ADD COLUMN `departureTime` DATETIME(3) NOT NULL,
    ADD COLUMN `flightNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `flightStatus` ENUM('Cancelled', 'Confirmed', 'Pending', 'CheckedIn', 'Boarded', 'Delayed', 'InFlight', 'Arrived', 'Departed', 'Scheduled') NOT NULL,
    ADD COLUMN `fromAirportId` VARCHAR(191) NOT NULL,
    ADD COLUMN `toAirportId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Booking` (
    `id` VARCHAR(191) NOT NULL,
    `passengerId` VARCHAR(191) NOT NULL,
    `flightId` VARCHAR(191) NOT NULL,
    `seatNumber` VARCHAR(191) NOT NULL,
    `bookingDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `passengerClass` ENUM('Economy', 'Business', 'First') NOT NULL,
    `bookingStatus` ENUM('Confirmed', 'Cancelled', 'Pending', 'CheckedIn', 'NoShow') NOT NULL,

    INDEX `Booking_passengerId_idx`(`passengerId`),
    INDEX `Booking_flightId_idx`(`flightId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Flight_flightNumber_key` ON `Flight`(`flightNumber`);

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_fromAirportId_fkey` FOREIGN KEY (`fromAirportId`) REFERENCES `Airport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_toAirportId_fkey` FOREIGN KEY (`toAirportId`) REFERENCES `Airport`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_flightId_fkey` FOREIGN KEY (`flightId`) REFERENCES `Flight`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
