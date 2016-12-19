<?php
 $con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}


$un = $_GET['un'];
$reg = $HTTP_RAW_POST_DATA;


$jagan = (array) json_decode($reg);
$ps = $jagan["ps"];


if($reg) {
	$query = mysqli_query($con,"INSERT INTO posts VALUES ('','$un','$ps')"); 
}
mysqli_close($con);


?>