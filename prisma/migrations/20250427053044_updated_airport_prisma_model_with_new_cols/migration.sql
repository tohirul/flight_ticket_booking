-- AlterTable
ALTER TABLE `Airport` ADD COLUMN `phoneNumber` VARCHAR(191) NULL,
    ADD COLUMN `website` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `Airport_timezone_idx` ON `Airport`(`timezone`);

-- RenameIndex
ALTER TABLE `Airport` RENAME INDEX `Airport_cityId_fkey` TO `Airport_cityId_idx`;

-- RenameIndex
ALTER TABLE `Airport` RENAME INDEX `Airport_countryId_fkey` TO `Airport_countryId_idx`;
