<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
session_start();
include_once("DatabaseHandler.php");
include_once("authorize.php");

$id = getID();

$data = json_decode(file_get_contents('php://input'), true);
$sleep = $data["sleep"];
$sleep_goal = $data["sleep_goal"];

if (!is_null($id) && strlen($sleep) > 0) {
    $pdo = (new DatabaseHandler)->dbConnection();
    $stmt = $pdo->prepare("INSERT INTO `Sleep` (id_student, sleep, sleep_goal) VALUES ($id, $sleep, $sleep_goal)");
    $stmt->execute();
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized"));
}
