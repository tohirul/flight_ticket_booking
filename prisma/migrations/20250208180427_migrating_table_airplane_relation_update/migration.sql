/*
  Warnings:

  - You are about to drop the `Airline` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Airplane` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Flight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Passenger` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Airplane` DROP FOREIGN KEY `Airplane_airlineId_fkey`;

-- DropForeignKey
ALTER TABLE `Flight` DROP FOREIGN KEY `Flight_airlineId_fkey`;

-- DropForeignKey
ALTER TABLE `Flight` DROP FOREIGN KEY `Flight_airplaneId_fkey`;

-- DropTable
DROP TABLE `Airline`;

-- DropTable
DROP TABLE `Airplane`;

-- DropTable
DROP TABLE `Flight`;

-- DropTable
DROP TABLE `Passenger`;
