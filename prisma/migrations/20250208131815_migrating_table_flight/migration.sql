-- CreateTable
CREATE TABLE `Flight` (
    `id` VARCHAR(191) NOT NULL,
    `airlineId` VARCHAR(191) NULL,
    `airplaneId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_airlineId_fkey` FOREIGN KEY (`airlineId`) REFERENCES `Airline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_airplaneId_fkey` FOREIGN KEY (`airplaneId`) REFERENCES `Airplane`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
