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

$ItemCode = $_POST["ItemCode"];

$select = $_POST["select"];


$date = $_POST["date"];

$send=$_POST["send"];



if($send){

$sql = "INSERT INTO arriving (Item_code,select,Date)
VALUES ('$ItemCode','$select','$date')";
$result=mysqli_query($conn,$sql);
echo"your registration is done";
}
else{echo "It is an error try again";}


?>






















?>