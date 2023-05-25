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

$Item_code = $_POST["Item_code"];


$send=$_POST["send"];



if($send){

$sql = "INSERT INTO loading (Item_code)
VALUES ('$Item_code')";
$result=mysqli_query($conn,$sql);
echo"your registration is done";
}
else{echo "It is an error try again";}


?>






















?>