-- CreateTable
CREATE TABLE `Airline` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Airplane` (
    `id` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `seats` INTEGER NOT NULL,
    `capacity` INTEGER NOT NULL,
    `manufacturer` VARCHAR(191) NOT NULL,
    `engines` INTEGER NOT NULL,
    `speed` INTEGER NOT NULL,
    `fuelType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `airlineId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flight` (
    `id` VARCHAR(191) NOT NULL,
    `airlineId` VARCHAR(191) NULL,
    `airplaneId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Passenger` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Airplane` ADD CONSTRAINT `Airplane_airlineId_fkey` FOREIGN KEY (`airlineId`) REFERENCES `Airline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_airlineId_fkey` FOREIGN KEY (`airlineId`) REFERENCES `Airline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_airplaneId_fkey` FOREIGN KEY (`airplaneId`) REFERENCES `Airplane`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
