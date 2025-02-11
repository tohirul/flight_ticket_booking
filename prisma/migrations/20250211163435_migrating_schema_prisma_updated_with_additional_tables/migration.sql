/*
  Warnings:

  - The values [JetA,JetA1,JetB,Turboprop,Propeller,Rocket,Biofuel,Electric] on the enum `Airplane_fuelType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `engineConfiguration` to the `Airplane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `engineType` to the `Airplane` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Airplane` ADD COLUMN `engineConfiguration` ENUM('SingleEngine', 'TwinEngine', 'TriEngine', 'QuadEngine') NOT NULL,
    ADD COLUMN `engineType` ENUM('JetEngine', 'Turboprop', 'PistonEngine', 'RocketEngine') NOT NULL,
    MODIFY `fuelType` ENUM('JetFuel', 'Avgas', 'Diesel') NOT NULL;
