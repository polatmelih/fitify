<?php
function getAuthorizationHeader(): ?string
{
    $headers = null;
    if (isset($_SERVER['Authorization'])) {
        $headers = trim($_SERVER["Authorization"]);
    }
    else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
        $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
    } elseif (function_exists('apache_request_headers')) {
        $requestHeaders = apache_request_headers();
        // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
        $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
        //print_r($requestHeaders);
        if (isset($requestHeaders['Authorization'])) {
            $headers = trim($requestHeaders['Authorization']);
        }
    }
    return $headers;
}

/**
 * get access token from header
 * */
function getBearerToken(): ?string
{
    $headers = getAuthorizationHeader();
    // HEADER: Get the access token from the header
    if (!empty($headers)) {
        if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
            return $matches[1];
        }
    }
    return null;
}

function getID() {
    $token = getBearerToken();
    if (!is_null($token)) {
        $pdo = (new DatabaseHandler)->dbConnection();
        $stmt = $pdo->prepare("SELECT id_user FROM `Sessions` WHERE token = '$token'");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($result) > 0) {
            return $result[0]["id_user"];
        }
    }
    return null;
}

function isCoachOf(int $id_coach, int $id_student): bool {
    $pdo = (new DatabaseHandler)->dbConnection();
    $stmt = $pdo->prepare("SELECT * FROM `Coach-Student-Relation` WHERE id_coach = '$id_coach' AND id_student = '$id_student'");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return count($result) > 0;
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Return a 200 OK response for the preflight request
    http_response_code(200);
    exit;
}