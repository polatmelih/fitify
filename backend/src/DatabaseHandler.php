<?php
require_once("Config.php");
class DatabaseHandler {
    Public function dbConnection() {
        $dsn = "mysql:host=".Config::DBHOST.";dbname=".Config::DB.";charset=".Config::CHARSET;
        try {
            $pdo = new PDO($dsn, Config::DBUSER, Config::DBPASSWORD, Config::OPTIONS);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
        return $pdo;
    }
}

?>