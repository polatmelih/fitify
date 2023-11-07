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
$training = $data["training"];
$training_intensity = $data["training_intensity"];

if (!is_null($id) && !is_null($training) && !is_null($training_intensity)) {
    $pdo = (new DatabaseHandler)->dbConnection();
    $stmt = $pdo->prepare("INSERT INTO `Training` (id_student, training, training_intensity) VALUES ($id, $training, $training_intensity)");
    $stmt->execute();
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized"));
}
