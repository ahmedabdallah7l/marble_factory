
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

$username = $_POST["username"];
$password = $_POST["password"];
$send=$_POST["send"];

$password_hashed = password_hash($password, PASSWORD_DEFAULT);


if($send){

$sql = "INSERT INTO login (NAME, EMAIL, PASSWORD)
VALUES ('$username', '$email', '$password_hashed')";
$result=mysqli_query($conn,$sql);
echo"welcome";
}
else{echo "It is an error try again";}


?>



















?>