-- DropForeignKey
ALTER TABLE `Airport` DROP FOREIGN KEY `Airport_cityId_fkey`;

-- DropIndex
DROP INDEX `Airport_cityId_fkey` ON `Airport`;

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
