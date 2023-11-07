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
$weight = $data["weight"];
$goal_weight = $data["goal_weight"];

if (!is_null($id) && strlen($weight) > 0 && strlen($goal_weight) > 0) {
    $pdo = (new DatabaseHandler)->dbConnection();
    $stmt = $pdo->prepare("INSERT INTO `Weight` (id_student, weight, goal_weight) VALUES ($id, $weight, $goal_weight)");
    $stmt->execute();
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized"));
}
