SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+01:00";

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `e_mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `club` varchar(255) NOT NULL,


  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `start` varchar(255),
  `end` varchar(255),
  `allDay` varchar(5) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `Coach-Student-Relation` (
                         `id` int(11) NOT NULL AUTO_INCREMENT,
                         `id_coach` int(11) NOT NULL,
                         `id_student` int(11) NOT NULL,
                         PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Weight` (
                         `id` int(11) NOT NULL AUTO_INCREMENT,
                         `id_student` int(11) NOT NULL,
                         `weight` float(5) NOT NULL,
                         `goal_weight` FLOAT(5) NOT NULL,
                         `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Sleep` (
                          `id` int(11) NOT NULL AUTO_INCREMENT,
                          `id_student` int(11) NOT NULL,
                          `sleep` float(5) NOT NULL,
                          `sleep_goal` float(5) NOT NULL,
                          `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Training` (
                         `id` int(11) NOT NULL AUTO_INCREMENT,
                         `id_student` int(11) NOT NULL,
                         `training` float(5) NOT NULL,
                         `training_intensity` float(5) NOT NULL,
                         `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Sessions` (
                         `id` int(11) NOT NULL AUTO_INCREMENT,
                         `id_user` int(11) NOT NULL,
                         `token` varchar(255) NOT NULL,
                         `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Inserting data into Users table
INSERT INTO `Users` (`name`, `last_name`, `username`, `e_mail`, `password`, `role`, `age`, `club`)
VALUES
    ('Coach', 'Coacher', 'coach', 'coach.coacher@example.com', 'password123', 'Coach', '35', 'YB Bern'),
    ('John', 'Doe', 'johndoe', 'john.doe@example.com', 'password123', 'Student', '18', 'FC Solothurn'),
    ('Jane', 'Smith', 'janesmith', 'jane.smith@example.com', 'password456', 'Student', '20', 'FC Basel');

-- Inserting data into Events table
INSERT INTO `Events` (`user_id`, `start`, `end`, `allDay`, `title`)
VALUES
    ('2', '2024-01-20', '2024-01-20', 'true', '[Injury] Sprained ankle during game.'),
    ('2', '2024-02-15', '2024-01-15', 'true', '[Achievement] Scored the winning point in a major match.'),
    ('3', '2024-02-15', '2024-01-15', 'true', '[Achievement] Scored the winning point in a major match.'),
    ('3', '2024-01-20', '2024-01-20', 'true', '[Injury] Sprained ankle during game.');

INSERT INTO `Weight` (`id_student`, `weight`, `goal_weight`, `date`)
VALUES
    ('2', '65', '70', '2023-11-01 12:00:00'),
    ('2', '70', '80', '2023-11-02 12:00:00'),
    ('2', '75', '75', '2023-11-03 12:00:00'),
    ('2', '80', '60', '2023-11-04 12:00:00'),
    ('3', '65', '70', '2023-11-01 12:00:00'),
    ('3', '70', '80', '2023-11-02 12:00:00'),
    ('3', '75', '75', '2023-11-03 12:00:00'),
    ('3', '80', '60', '2023-11-04 12:00:00');

INSERT INTO `Sleep` (`id_student`, `sleep`, `sleep_goal`, `date`)
VALUES
    ('2', '6', '7', '2023-11-01 12:00:00'),
    ('2', '7', '8', '2023-11-02 12:00:00'),
    ('2', '8', '6', '2023-11-03 12:00:00'),
    ('2', '7', '7', '2023-11-04 12:00:00'),
    ('3', '8', '7', '2023-11-01 12:00:00'),
    ('3', '7', '8', '2023-11-02 12:00:00'),
    ('3', '6', '8', '2023-11-03 12:00:00'),
    ('3', '12', '10', '2023-11-04 12:00:00');

INSERT INTO `Training` (`id_student`, `training`, `training_intensity`, `date`)
VALUES
    ('2', '3', '5', '2023-11-01 12:00:00'),
    ('2', '2', '3', '2023-11-02 12:00:00'),
    ('2', '6', '2', '2023-11-03 12:00:00'),
    ('2', '4', '8', '2023-11-04 12:00:00'),
    ('3', '5', '7', '2023-11-01 12:00:00'),
    ('3', '8', '4', '2023-11-02 12:00:00'),
    ('3', '2', '10', '2023-11-03 12:00:00'),
    ('3', '0.5', '10', '2023-11-04 12:00:00');

INSERT INTO `Coach-Student-Relation` (`id_coach`, `id_student`)
VALUES
    ('1', '2'),
    ('1', '3');
