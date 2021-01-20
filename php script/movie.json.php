<?php
header('Content-Type: application/json; charset=UTF-8');
$queries = array();
parse_str($_SERVER['QUERY_STRING'], $queries);
$servername = "localhost";
$username = "";//username
$password = "";//password
$dbname = "";//dbname
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    //COULD CATCH ERR
}
$sql = 'SELECT * FROM movies';
$result = $conn->query($sql);
?>[<?php
$mycontentrail="";
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $mycontentrail .= ('{"moviename":"'.$row["moviename"].'",');
        $mycontentrail .= ('"year": ' . $row["year"] . ",");
		$mycontentrail .= ('"score": ' . $row["score"] . ",");
        $mycontentrail .= ('"desc": "' . $row["description"] . "\",");
        $mycontentrail .= ('"imgsrc": [' . $row["imgsrc"] . "],");
        $mycontentrail .= ('"imginf": "' . $row["imginf"] . "\",");
        $mycontentrail .= ('"trailer": [' . $row["trailer"] . "]},");
    }
}
echo(substr_replace($mycontentrail,"", -1));
?>]