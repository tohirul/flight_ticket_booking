-- DropForeignKey
ALTER TABLE `Airplane` DROP FOREIGN KEY `Airplane_airlineId_fkey`;

-- DropIndex
DROP INDEX `Airplane_airlineId_fkey` ON `Airplane`;

-- AddForeignKey
ALTER TABLE `Airplane` ADD CONSTRAINT `Airplane_airlineId_fkey` FOREIGN KEY (`airlineId`) REFERENCES `Airline`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
