<!doctype html>
<html lang="en">
  <head>

    <title>Intermediate Leaderboard</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">
    <link href="form-validation.css" rel="stylesheet">
    <link href="table.css" rel="stylesheet">
    
  </head>
  
  <body class="bg-light">
      
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Sec-Aware</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="infoPage.html">Information</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="select.html">Select Game</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="leaderboard.php">Leaderboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="feedback.html">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    <div class="container">
      <main class="p-5 rounded text-center">
          <p></p><br>
          
          <!--<form action="test.php" method="get">
              <input type="submit" value="Display leaderboard">
          </form>
          -->
          <?php
            $myfile = fopen("intermediateLeaderboard.txt", "r");
            
            $leaderboard = file('intermediateLeaderboard.txt');
            $leaderboardLength = count($leaderboard);
            $count = 0;
            $sortedLeaderboardArray = array(""=>"");
            echo "<table class='styled-table center'><tr><th>Username</th><th>Score</th></tr>";

            while ($count < $leaderboardLength) {

                $leaderboardLine = explode(".", $leaderboard[$count]);

                $username = $leaderboardLine[0];
                $score = $leaderboardLine[1];
                
                $sortedLeaderboardArray[$username] = $score;

              //  echo "<tr><td>" . $user->username . "</td><td>" . $user->score . "</td></tr>";
                $count++;
            }
            
            arsort($sortedLeaderboardArray);
            
            foreach($sortedLeaderboardArray as $x => $x_value) {
                
                echo "<tr><td>" . $x . "</td><td>" . $x_value . "</td></tr>";
                
            }

            echo "</table>";
          ?>
            
      </main>
    </div> 
  </body>
</html>