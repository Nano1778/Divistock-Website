<?php
require("db-con/db-conn.php");

$type = "Enter your referral code";
$ref = "Enter your referral code";

if(isset($_GET['ref']))
{
	$type = "GET";
	$ref = $_GET['ref'];
}
else if(isset($_POST['ref']))
{
	$type = "POST";
	$ref = $_POST['ref'];
}
if(is_int($ref) != true)
{
    $type = "Enter your referral code";
}
if($type != "Enter your referral code")
{
    //UPDATE REF
    setcookie("dvsr", $ref, time() + (365*24*60*60*1000));
    if(!isset($_COOKIE['dvst']))
    {
    	setcookie("dvst", "V", time() + (365*24*60*60*1000));
    	//UPDATE UNQIUE VIEWS
    	$sql_query = "UPDATE `refs` SET ref_unq_vis = ref_unq_vis + 1 WHERE ref=$ref";
    	$result = mysqli_query($dbconn, $sql_query) or die();
    	//UPDATE VIEWS
    	$sql_query = "UPDATE `refs` SET ref_visits = ref_visits + 1 WHERE ref=$ref";
    	$result = mysqli_query($dbconn, $sql_query) or die();
    }
    else
    {
    	//UPDATE VIEWS
    	$sql_query = "UPDATE `refs` SET ref_visits = ref_visits + 1 WHERE ref=$ref";
    	$result = mysqli_query($dbconn, $sql_query) or die();	
    }
}
?>