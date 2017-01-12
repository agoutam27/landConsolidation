<?php
    $host = "localhost";
    $username = "root";
    $password = "akhilesh1804";
    $database="landconsolidation";
    $conn = new mysqli($host,$username,$password,$database);
    
    if($conn->connect_error){
        die("Error connecting to database");
    }
?>