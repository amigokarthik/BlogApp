<?php
 $con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}



$result = mysqli_query($con,"SELECT * FROM posts ORDER BY id DESC");
	$response = array();
	while($row = mysqli_fetch_assoc($result))
	{
		 $response[] = $row;
	}
print json_encode($response, 128);
mysqli_close($con);
?>