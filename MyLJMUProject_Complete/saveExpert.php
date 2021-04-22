<?php

   $username = $_POST["username"];
   $score = $_POST["totalScore"];
   
   $insert = PHP_EOL . $username . "." . $score;
   
   $myfile = fopen("expertLeaderboard.txt", "a+");
   
   fwrite($myfile, $insert);
   
   fclose($myfile);
   
   header( "Location: https://ljmuproject.azurewebsites.net/index.html" );
   exit;
   
  // $leaderboard = fread($myfile,filesize("webdictionary.txt"));
   
   
?>