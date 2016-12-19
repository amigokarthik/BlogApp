<?php
$con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}


$result = mysqli_query($con,"SELECT * FROM bColl");
	$response = [];

	while($row = mysqli_fetch_array($result))
	{

		 $response[$row['username']] =$row['password'] ;
	}
echo json_encode($response);
mysqli_close($con);


?>