<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
include_once("DatabaseHandler.php");
include_once("authorize.php");

$id = getID();

$data = json_decode(file_get_contents('php://input'), true);
$title = $data["title"];
$start = $data["start"];
$end = $data["end"];
$allDay = $data["allDay"];

if (!is_null($id) && strlen($title) > 0 && strlen($start) > 0) {
    $pdo = (new DatabaseHandler)->dbConnection();
    $stmt = $pdo->prepare("INSERT INTO `Events` (user_id, title, start, end, allDay) VALUES ('$id', '$title', '$start', '$end', '$allDay')");
    $stmt->execute();
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized"));
}
