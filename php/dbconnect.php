<?php

  define('hostName','localhost');

  define('userName','root');

  define('password','');

  define('dbName', 'logreg');

  $con = mysqli_connect(hostName, userName, password,dbName);

   if (!$con){
      die("Error in connection" . mysqli_connect_error()) ;
  }

?>
