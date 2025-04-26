-- DropForeignKey
ALTER TABLE `Airport` DROP FOREIGN KEY `Airport_countryId_fkey`;

-- DropForeignKey
ALTER TABLE `City` DROP FOREIGN KEY `City_countryId_fkey`;

-- DropForeignKey
ALTER TABLE `City` DROP FOREIGN KEY `City_stateId_fkey`;

-- DropIndex
DROP INDEX `Airport_countryId_fkey` ON `Airport`;

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `City_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `State`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `City_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
