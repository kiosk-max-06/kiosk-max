-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema kiosk
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `kiosk` DEFAULT CHARACTER SET utf8 ;
USE `kiosk` ;

-- -----------------------------------------------------
-- Table `kiosk`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`category` (
    `id` INT NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kiosk`.`menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`menu` (
    `id` INT NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `price` INT NOT NULL,
    `image` VARCHAR(512) NOT NULL,
    `category_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_menu_category_idx` (`category_id` ASC) VISIBLE
)ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kiosk`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`payment` (
    `id` INT NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kiosk`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`orders` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `total_amount` INT NOT NULL COMMENT '총 결제금액',
    `received_amount` INT NOT NULL COMMENT '지불금액',
    `changes` INT NOT NULL COMMENT '거스름돈',
    `payment_id` INT NOT NULL,
    `order_status_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_order_payment1_idx` (`payment_id` ASC) VISIBLE,
    INDEX `fk_order_status1_idx` (`order_status_id` ASC) VISIBLE
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kiosk`.`order_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`order_status` (
  `id` INT NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `kiosk`.`order_menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`order_menu` (
    `id` INT NOT NULL,
    `count` INT NOT NULL,
    `menu_id` INT NOT NULL,
    `order_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_order_menu_menu1_idx` (`menu_id` ASC) VISIBLE,
    INDEX `fk_order_menu_order1_idx` (`order_id` ASC) VISIBLE
)
    ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `kiosk`.`order_menu_option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`order_menu_option` (
   `id` INT NOT NULL,
   `option_id` INT NOT NULL,
   `order_menu_id` INT NOT NULL,
   PRIMARY KEY (`id`),
   INDEX `fk_order_menu_option_option1_idx` (`option_id` ASC) VISIBLE,
   INDEX `fk_order_menu_option_order_menu1_idx` (`order_menu_id` ASC) VISIBLE
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kiosk`.`option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`options` (
    `id` INT NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kiosk`.`order_menu_option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kiosk`.`order_menu_option` (
    `id` INT NOT NULL,
    `count` INT NOT NULL,
    `date` DATETIME NOT NULL,
    `menu_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_order_menu_option_order_menu1_idx` (`menu_id` ASC) VISIBLE
)
    ENGINE = InnoDB;




SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
