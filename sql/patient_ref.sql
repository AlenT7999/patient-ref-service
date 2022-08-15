/*.....CREATE TABLE pharmacies ....*/

CREATE TABLE IF NOT EXISTS `patients` ( 
        `id` VARCHAR(40) PRIMARY KEY NOT NULL ,
        `firstName` VARCHAR(30) NOT NULL , 
        `lastName` VARCHAR(30) NOT NULL,
        `email` VARCHAR(30) NOT NULL,
        `dob` varchar(10) NOT NULL,
        `language` varchar(30) NOT NULL,
        `phone` VARCHAR(50) NOT NULL ,
        `address` VARCHAR(50) NOT NULL ,
        `notes` VARCHAR(50) NOT NULL , 
        `createdBy`varchar(45) NOT NULL DEFAULT '',
        `updatedBy` varchar(45) NOT NULL DEFAULT '',
        `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
        `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
        ) ;
