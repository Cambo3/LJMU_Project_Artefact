<?php

   $username = $_POST["username"];
   $score = $_POST["totalScore"];
   
   $insert = PHP_EOL . $username . "." . $score;
   
   $myfile = fopen("Leaderboard.txt", "a+");
   
   fwrite($myfile, $insert);
   
   fclose($myfile);
   
   header( "Location: https://ljmuproject.azurewebsites.net/index.html" );
   exit;
 
?>



