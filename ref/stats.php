<?php
require("../db-con/db-conn.php");
if(isset($_GET['ref']))
{
	$ref = $_GET['ref'];
	$sql_query = "SELECT * FROM `refs` WHERE ref='$ref'";
	$result = mysqli_query($dbconn, $sql_query) or die();
	$row = mysqli_fetch_assoc($result);
	$ref_vis = $row['ref_visits'];
	$ref_unq_vis = $row['ref_unq_vis'];
	$ref_signups = $row['ref_signups'];

	//USER STUFF
	$sql_query = "SELECT * FROM `users` WHERE id='$ref'";
	$ure = mysqli_query($dbconn, $sql_query);
	$row = mysqli_fetch_assoc($ure);

	$ref_name = $row['name'];
	$ref_id = $row['email'];

	?>
<html>
<head>
	<title>DIV | Affiliates</title>
</head>
<body>
	<style>
	table, th, td {
    	border: 1px solid black;
	}
	</style>
	<h1><?php echo $ref_name; ?></h1>
	<p>REF CODE: <?php echo $ref; ?></p>
	<br>
	 <table style="width:100%">
	  <tr>
	    <th>Refcode Visits</th>
	    <th>Refcode Unique Visists</th>
	    <th>Refcode Signups</th>
	  </tr>
	  <tr>
	    <td><?php echo $ref_vis; ?></td>
	    <td><?php echo $ref_unq_vis; ?></td>
	    <td><?php echo $ref_signups; ?></td>
	  </tr>
	</table> 
	<br>
	<p>Your referral link: <a href="/?ref=<?php echo $ref ;?>">www.divistock.com/?ref=<?php echo $ref; ?></a></p>
</body>
</html>
	<?php
}else{
	?>
	<html>
<head>
	<title>DIV | Affiliates</title>
</head>
<body>
	<h1>ERROR!</h1>
	<p>Unknown Referral Code!</p>
</body>
</html>
	<?php
}
?>