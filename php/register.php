<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
    }
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }
 
  require "dbconnect.php";
  
    $data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
		$username = $request->username;
        $password = $request->password;
		$mobile = $request->mobile;
        $name = $request->name;
        $gender = $request->gender;
        $bday_Day = $request->bday_Day;
        $bday_Month = $request->bday_Month;
        $bday_Year = $request->bday_Year;
 
	}

$username = stripslashes($username);
$password = stripslashes($password);
$password = md5($password);

$sql = "INSERT INTO users (username, password, name, mobile, gender, bday_Day, bday_Month, bday_Year)
VALUES ('$username', '$password', '$name', '$mobile', '$gender', '$bday_Day', '$bday_Month', '$bday_Year')";

if ($con->query($sql) === TRUE) {
	$response= "Registration successfull";
   
} else {
   $response= "Error: " . $sql . "<br>" . $db->error;
}
	echo json_encode($response);
 
?>
