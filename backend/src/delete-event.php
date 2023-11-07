<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
include_once("DatabaseHandler.php");
include_once("authorize.php");

$id = getID();

if (!is_null($id) && isset($_GET["id"])) {
    $event_id = $_GET["id"];
    $pdo = (new DatabaseHandler)->dbConnection();
    $stmt = $pdo->prepare("DELETE FROM `Events` WHERE id = '$event_id'");
    $stmt->execute();
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized"));
}
