<?php 
$host = "localhost";
$user = "root";
$password = "";
$dbname = "project";


$conn=mysqli_connect($host ,$user,$password ,$dbname );
if(isset ($conn)){

    echo"database is connected";
}
else{ echo "database disconnected";}

$fristname = $_POST["fristname"];

$lastname = $_POST["lastname"];
$username = $_POST["username"];

$email = $_POST["email"];
$phone = $_POST["phone"];
$password = $_POST["password"];
$repassword = $_POST["repassword"];

$NameSelect = $_POST["NameSelect"];
$send=$_POST["send"];

$password_hashed = password_hash($password, PASSWORD_DEFAULT);
$password_hashed = password_hash($repassword, PASSWORD_DEFAULT);

if($send){

$sql = "INSERT INTO registration (FRIST_NAME,LAST_NAME,USER_NAME, EMAIL, PASSWORD,REPASWORD,PHONE,NameSelect)
VALUES ('$fristname','$lastname','$username', '$email', '$password_hashed','$password_hashed',$phone,'$NameSelect')";
$result=mysqli_query($conn,$sql);
echo"your registration is done";
}
else{echo "It is an error try again";}


?>






















?>