<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
include_once("DatabaseHandler.php");
include_once("authorize.php");

$id = getID();

if (!is_null($id)) {
    $pdo = (new DatabaseHandler)->dbConnection();
    $stmt = $pdo->prepare("DELETE FROM `Sessions` WHERE id_user = '$id'");
    $stmt->execute();
}
