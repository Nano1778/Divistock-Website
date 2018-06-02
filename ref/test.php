<?php
require("../db-con/db-conn.php");
$ref = $_GET['ref'];
$sql_query = "UPDATE `refs` SET ref_visits = ref_visits + 1 WHERE ref=$ref";
$result = mysqli_query($dbconn, $sql_query) or die();
?>