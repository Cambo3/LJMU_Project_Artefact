<?php

header( "Location: https://ljmuproject.azurewebsites.net/index.html" );

$feedback1 = $_POST["question1"];
$feedback2 = $_POST["question2"];
$feedback3 = $_POST["question3"];
$feedback4 = $_POST["question4"];
$feedback5 = $_POST["question5"];
$feedback6 = $_POST["question6"];

try {
    $conn = new PDO("sqlsrv:server = tcp:projectfeedback2021.database.windows.net,1433; Database = ProjectFeedback", "ProjectAdmin", "LJMUProject0");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

$sql = "INSERT INTO feedback (question1, question2, question3, question4, question5, question6) VALUES ('$feedback1', '$feedback2', '$feedback3', '$feedback4', '$feedback5', '$feedback6')";

$conn->exec($sql);

$conn = null;

exit;

?>