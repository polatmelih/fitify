<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
include_once("DatabaseHandler.php");
include_once("authorize.php");

$id = getID();
$checkPermission = true;

if (isset($_GET["sus_id"])) {
    $id = $_GET["sus_id"];
    $checkPermission = isCoachOf(getID(), $id);
}

if (!is_null($id) && $checkPermission) {
    $pdo = (new DatabaseHandler)->dbConnection();
    $stmt = $pdo->prepare("SELECT id, start, end, allDay, title FROM `Events` WHERE user_id = '$id'");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($result) > 0) {
        echo json_encode($result);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Keine Daten gefunden."));
    }
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized"));
}
