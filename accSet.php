<?php
$con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}



if(isset($_FILES['file'])) {

$un = $_GET['un'];
if((@$_FILES["file"]["type"] == "image/jpeg") || (@$_FILES["file"]["type"] == "image/png") || (@$_FILES["file"]["type"] == "image/gif") && (@$_FILES["file"]["size"] < 1048576)) {

$chars1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

$rand_dir_name1 = substr(str_shuffle($chars1),0,15);

mkdir("userdata/profile_pics1/$rand_dir_name1");

if(file_exists("userdata/profile_pics1/$rand_dir_name1".@$_FILES["file"]["name"])) {

echo @$_FILES["file"]["name"]."Already exists";

}

else {

move_uploaded_file(@$_FILES["file"]["tmp_name"],"userdata/profile_pics1/$rand_dir_name1/".$_FILES["file"]["name"]);

//echo "Uploaded and stored in: userdata/profile_pics/$rand_dir_name/".@$_FILES["profile"]["name"];

$t_pic_name = @$_FILES["file"]["name"];
$query = mysqli_query($con,"UPDATE bColl SET picture='$rand_dir_name1/$t_pic_name' WHERE username='$un' ");

echo "./userdata/profile_pics1/$rand_dir_name1/".$_FILES["file"]["name"];
//$t_query = mysqli_query($con,"UPDATE bColl SET picture='$rand_dir_name1/$t_pic_name' ");

//header("Location: account_settings.php");

}
}
}

/*if($_FILES['file']['name']){
  echo $_FILES['file']['tmp_name'];
    move_uploaded_file($_FILES['file']['tmp_name'],"./test.jpg");
}*/
 ?>
