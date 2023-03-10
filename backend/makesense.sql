-- Active: 1669830684047@@127.0.0.1@3306@make_sense
​
CREATE TABLE
    `Status` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `status` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)
    );
​
CREATE TABLE
    `Firstdecision` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `content` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)
    );
​
CREATE TABLE
    `Finaldecision` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `content` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)
    );
​
CREATE TABLE
    `User` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `lastname` varchar(100) NOT NULL,
        `firstname` varchar(100) NOT NULL,
        `email` varchar(100) NOT NULL,
        `is_admin` BOOLEAN NULL,
        `password` BOOLEAN NULL, 
        `image` varchar(255) NULL,
        `bio` varchar(100) NULL,
        `is_connect` BOOLEAN NULL,
        `position` varchar(100) NULL,
        PRIMARY KEY (`id`)
    );
​
CREATE TABLE
    `Decision` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` varchar(100) NOT NULL,
        `content` varchar(255) NOT NULL,
        `deadline` DATE NOT NULL,
        `contexte` varchar(255) NOT NULL,
        `profit` varchar(255) NOT NULL,
        `usefullness` varchar(255) NOT NULL,
        `inconvenience` varchar(255) NOT NULL,
        `id_user` INT NOT NULL,
        `date_posted` DATE NOT NULL,
        `id_status` INT NOT NULL,
        `id_firstdecision` INT NULL,
        `id_finaldecision` INT NULL,
        PRIMARY KEY (`id`)
    );
​
CREATE TABLE
    `Authorization` (
        `id` INT NOT NULL AUTO_INCREMENT, 
        `id_user` INT NOT NULL,
        `id_decision` INT NULL,
        `is_expert` BOOLEAN,
        `notification` BOOLEAN,  
        PRIMARY KEY (`id`) 
    );
​
CREATE TABLE
    `Notice` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `id_decision` INT NOT NULL,
        `id_user` INT NOT NULL,
        `content` varchar(255) NOT NULL,
        `date` DATE NOT NULL,
        PRIMARY KEY (`id`)
    );
​
CREATE TABLE
    `Conflict` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `id_decision` INT NOT NULL,
        `id_user` INT NOT NULL,
        `content` varchar(255) NOT NULL,
        `date` DATE NOT NULL,
        PRIMARY KEY (`id`)
    );

    CREATE TABLE
    `Notification` (
        `id` INT NOT NULL AUTO_INCREMENT, 
        `id_authorization` INT NOT NULL, 
        PRIMARY KEY (`id`) 
    );

 
    ALTER TABLE `Notification`
ADD
    CONSTRAINT `fk_Notification_id_authorization` FOREIGN KEY(`id_authorization`) REFERENCES `Authorization` (`id`);
​
ALTER TABLE `Decision`
ADD
    CONSTRAINT `fk_Decision_id_user` FOREIGN KEY(`id_user`) REFERENCES `User` (`id`);
​
ALTER TABLE `Decision`
ADD
    CONSTRAINT `fk_Decision_id_status` FOREIGN KEY(`id_status`) REFERENCES `Status` (`id`);
​
ALTER TABLE `Decision`
ADD
    CONSTRAINT `fk_Decision_id_firstdecision` FOREIGN KEY(`id_firstdecision`) REFERENCES `Firstdecision` (`id`);
​
ALTER TABLE `Decision`
ADD
    CONSTRAINT `fk_Decision_id_finaldecision` FOREIGN KEY(`id_finaldecision`) REFERENCES `Finaldecision` (`id`);
​
ALTER TABLE `Authorization`
ADD
    CONSTRAINT `fk_Authorization_id_user` FOREIGN KEY(`id_user`) REFERENCES `User` (`id`);
​
ALTER TABLE `Authorization`
ADD
    CONSTRAINT `fk_Authorization_id_decision` FOREIGN KEY(`id_decision`) REFERENCES `Decision` (`id`);
​
ALTER TABLE `Notice`
ADD
    CONSTRAINT `fk_Notice_id_decision` FOREIGN KEY(`id_decision`) REFERENCES `Decision` (`id`);
​
ALTER TABLE `Notice`
ADD
    CONSTRAINT `fk_Notice_id_user` FOREIGN KEY(`id_user`) REFERENCES `User` (`id`);
​
ALTER TABLE `Conflict`
ADD
    CONSTRAINT `fk_Conflict_id_decision` FOREIGN KEY(`id_decision`) REFERENCES `Decision` (`id`);
​
ALTER TABLE `Conflict`
ADD
    CONSTRAINT `fk_Conflict_id_user` FOREIGN KEY(`id_user`) REFERENCES `User` (`id`);