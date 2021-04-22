<?php

$question1 = $_POST['question1'];
$question2 = $_POST['question2'];

$emailBody = "Answer to Question 1 is: $question1 and answer to question 2 is: $question2";
$emailRecieve = "joshuacampbellljmuproject@outlook.com";
$emailTitle = "Feedback Form";
$emailSend = "joshuacampbellljmuproject@outlook.com";
$headers = "From: $emailSend";

mail($emailRecieve,$emailTitle,$emailBody,$headers);

header( "Location: http://localhost:8080/artefact/index.html" );
exit;

?>