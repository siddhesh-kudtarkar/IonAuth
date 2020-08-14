<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }

    exit(0);
}

require "dbconnect.php";

$data = file_get_contents('php://input');
if (isset($data)) {
    $request = json_decode($data,true);
    $username = $request['username'];
    $password = $request['password'];
    $password = md5($password);
    $mobile = $request['mobile'];
}

$sql = "SELECT id FROM users WHERE username = '$username' and password = '$password' and mobile = '$mobile'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

$count = mysqli_num_rows($result);

if ($count > 0) {
    $response = "Your login is successful.";
} else {
    $response = "Your login Username or Password or Mobile Number is invalid. Check your login credentials.";
}

echo json_encode($response);