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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
