<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
include_once("DatabaseHandler.php");
include_once("authorize.php");

$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data["username"]) || !isset($data["password"])) {
    http_response_code(400);
    echo json_encode(array("message" => "Login failed."));
    exit();
}

$username = $data["username"];
$password = $data["password"];

$pdo = (new DatabaseHandler)->dbConnection();
$stmt = $pdo->prepare("SELECT * FROM `Users` WHERE username = '$username' AND password = '$password'");
$stmt->execute();
$result_user = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (count($result_user) > 0) {
    $name = $result_user[0]["name"] . " " . $result_user[0]["last_name"];
    $role = $result_user[0]["role"];
    $id = $result_user[0]["id"];

    $token = uniqid("", true);

    $stmt = $pdo->prepare("SELECT * FROM `Sessions` WHERE id_user = '$id'");
    $stmt->execute();
    $result_token = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($result_token) > 0) {
        $stmt = $pdo->prepare("UPDATE `Sessions` SET token = '$token' WHERE id_user = '$id'");
    } else {
        $stmt = $pdo->prepare("INSERT INTO `Sessions` (`id_user`, `token`) VALUES ('$id', '$token')");
    }
    $stmt->execute();
    header("Authorization: Bearer " . $token);
    $data = array("name" => $name, "role" => $role, "token" => $token);
    echo json_encode($data);
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Benutzername oder Password ist falsch."));
}