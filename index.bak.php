<?php
 $con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}




$reg = $HTTP_RAW_POST_DATA;


$jagan = (array) json_decode($reg);
$un = $jagan["un"];
$pw = $jagan["pw"];
$img="defaul/default_pic.jpg";

	$u_check=mysqli_query($con,"SELECT username FROM bColl WHERE username = '$un'");
		$check = mysqli_num_rows($u_check);


if($check == 0) {
	$query = mysqli_query($con,"INSERT INTO bColl VALUES ('$un','$pw','$img')"); 
	echo "Now Please login";
}
else
{
 echo	"Username already taken,try another one!";
}
mysqli_close($con);


?>