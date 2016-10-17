
<?php

$data = json_decode(file_get_contents("php://input"));
$nombre = mysql_real_escape_string($data->nombre);
$option = mysql_real_escape_string($data->option);
$telefonoContacto = mysql_real_escape_string($data->telefonoContacto);
$location = mysql_real_escape_string($data->location);
$description = mysql_real_escape_string($data->description);
$type = mysql_real_escape_string($data->type);
$imagebckg = mysql_real_escape_string($data->imagebckg);

mysql_connect("localhost", "root", "") or die(mysql_error()); 
mysql_select_db("petfound") or die(mysql_error());

mysql_query("INSERT INTO pets (nombre,type,option,description,telefonoContacto,location,image) VALUES ('$nombre', '$type', '$option', '$description','$telefonoContacto', '$location','$imagebckg')");

$message = "SUCCESS";

echo $message;
?>
