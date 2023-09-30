CREATE TABLE
  `Users` (
    `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    `user_name` varchar(255) DEFAULT NULL,
    `user_email` varchar(255) NOT NULL,
    `user_password` varchar(255) NOT NULL,
    `user_image` varchar(255) DEFAULT NULL,
    `total_orders` int DEFAULT NULL,
    `last_logged_in` datetime DEFAULT NULL,
    `token` varchar(255) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    PRIMARY KEY (`user_id`),
    UNIQUE KEY `user_email` (`user_email`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci