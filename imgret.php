<?php
$con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}


$un = $_GET['un'];

$sql = mysqli_query($con,"SELECT picture FROM bColl WHERE username='$un' LIMIT 1");
$userCount = mysqli_num_rows($sql);
	if($userCount == 1) {
		while ($row = mysqli_fetch_array($sql,MYSQLI_ASSOC)) {
			$id = $row["picture"];
		}
		
	}
echo "./userdata/profile_pics1/".$id;
?>