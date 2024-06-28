<?php

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "merkur"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Lidhja dështoi: " . $conn->connect_error);
}
echo "Lidhja me bazën e të dhënave u realizua me sukses";
?>
