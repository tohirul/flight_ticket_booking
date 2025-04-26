/*
  Warnings:

  - Added the required column `flightDistance` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flightDuration` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Flight` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `flightDistance` INTEGER NOT NULL,
    ADD COLUMN `flightDuration` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
