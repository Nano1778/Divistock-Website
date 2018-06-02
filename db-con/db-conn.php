<?php
$dbconn = mysqli_connect('localhost', 'nipbxuhf_divistock', '5)a8nsH53Sx5tQnH49)S42-+NWxS?^9');
if (!$dbconn){
    die("Database Connection Failed" . mysqli_error($dbconn));
}
$select_db = mysqli_select_db($dbconn, 'nipbxuhf_divistock');
if (!$select_db){
    die("Database Selection Failed" . mysqli_error($dbconn));
}
?>
