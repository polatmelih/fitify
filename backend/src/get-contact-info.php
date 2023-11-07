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
    $stmt = $pdo->prepare("SELECT id_student FROM `Coach-Student-Relation` WHERE id_coach = '$id'");
    $stmt->execute();
    $result_id = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($result_id) > 0) {
        $endResult = array();
        foreach ($result_id as $row) {
            $id = $row["id_student"];
            $stmt = $pdo->prepare("SELECT id, name, last_name, e_mail, age, club FROM `Users` WHERE id = '$id'");
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $endResult[] = array("id" => $id, "name" => $result[0]["name"], "last_name" => $result[0]["last_name"], "e_mail" => $result[0]["e_mail"], "age" => $result[0]["age"], "club" => $result[0]["club"]);
        }
        echo json_encode($endResult);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Keine Daten gefunden."));
    }
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Unauthorized"));
}