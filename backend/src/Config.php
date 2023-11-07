<?php

    class Config {
        const DBHOST = '172.22.0.1';
        const DBUSER = 'mysql-user';
        const DBPASSWORD = 'mysql-password';
        const DB = "mysql-database";
        const CHARSET = "utf8mb4";
        const OPTIONS = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

    }

?>