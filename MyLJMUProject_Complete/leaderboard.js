var leaderboardArray = [];

function showLeaderboard() {
    console.log("worked1");
    for (i = 0; i < leaderboard.length; i++) {
            
        var currentLine = JSON.parse(leaderboard[i]);
        var lineArray = currentLine.split(".");
        
        var user = {           
            username:lineArray[0],
            score:lineArray[1]  
        };
        
        leaderboardArray.push(user);

    }
    console.log("worked2");
    leaderboardArray.sort(function(a, b){return a.score - b.score});
    console.log("worked3");
    document.getElementById("demo").innerHTML =
    leaderboardArray[0].username + " " + leaderboardArray[0].score + "<br>" +
    leaderboardArray[1].username + " " + leaderboardArray[1].score + "<br>" +
    leaderboardArray[2].username + " " + leaderboardArray[2].score;
    console.log("worked4");
}
