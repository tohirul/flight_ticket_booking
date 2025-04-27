/*
  Warnings:

  - Made the column `airlineId` on table `Flight` required. This step will fail if there are existing NULL values in that column.
  - Made the column `airplaneId` on table `Flight` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Flight` DROP FOREIGN KEY `Flight_airlineId_fkey`;

-- DropForeignKey
ALTER TABLE `Flight` DROP FOREIGN KEY `Flight_airplaneId_fkey`;

-- AlterTable
ALTER TABLE `Flight` MODIFY `airlineId` VARCHAR(191) NOT NULL,
    MODIFY `airplaneId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Booking_flightId_seatNumber_idx` ON `Booking`(`flightId`, `seatNumber`);

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_airlineId_fkey` FOREIGN KEY (`airlineId`) REFERENCES `Airline`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_airplaneId_fkey` FOREIGN KEY (`airplaneId`) REFERENCES `Airplane`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
