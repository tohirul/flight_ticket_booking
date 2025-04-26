-- DropIndex
DROP INDEX `City_name_countryId_idx` ON `City`;

-- RenameIndex
ALTER TABLE `City` RENAME INDEX `City_countryId_fkey` TO `City_countryId_idx`;

-- RenameIndex
ALTER TABLE `City` RENAME INDEX `City_stateId_fkey` TO `City_stateId_idx`;
