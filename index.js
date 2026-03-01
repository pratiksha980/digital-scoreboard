let homeScoreEl = document.getElementById("sc1");
let guestScoreEl = document.getElementById("sc2");
let homeScore = 0;
let guestScore = 0;
function addPoints(team, points) {
  if (team == "home") {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
  } else {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
  }
}
function resetGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
