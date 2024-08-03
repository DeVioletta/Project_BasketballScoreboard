var countHome = 0;
var countGuest = 0;

document.getElementById("add1PointsHome").addEventListener("click", function(){
    countHome += 1;
   updateScore()
})

document.getElementById("add2PointsHome").addEventListener("click", function(){
    countHome += 2;
   updateScore()
})

document.getElementById("add3PointsHome").addEventListener("click", function(){
    countHome += 3;
   updateScore()
})

document.getElementById("add1PointsGuest").addEventListener("click", function(){
    countGuest += 1;
    updateScore()
})

document.getElementById("add2PointsGuest").addEventListener("click", function(){
    countGuest += 2;
    updateScore()
})

document.getElementById("add3PointsGuest").addEventListener("click", function(){
    countGuest += 3;
    updateScore()
})

document.getElementById("reset-btn").addEventListener("click", function(){
    countHome = 0;
    countGuest = 0;
    updateScore()
})

function updateScore(){
    let homeScoreEl = document.getElementById("home-score");
    let guestScoreEl = document.getElementById("guest-score");
    homeScoreEl.textContent = countHome;
    guestScoreEl.textContent = countGuest;

    if (countHome > countGuest) {
        Object.assign(homeScoreEl.style, {
            color:'#41F295',
            textShadow: '0 0 15px #00da66'
        })
        Object.assign(guestScoreEl.style, {
            color:'#F94F6D',
            textShadow: '0 0 15px #fd002e'
        })
  
    }
    else if (countGuest > countHome){
        Object.assign(guestScoreEl.style, {
            color:'#41F295',
            textShadow: '0 0 15px #00da66'
        })
        Object.assign(homeScoreEl.style, {
            color:'#F94F6D',
            textShadow: '0 0 15px #fd002e'
        })
    }
    else if (countGuest = countHome){
        Object.assign(guestScoreEl.style, {
            color:'#ffff69',
            textShadow: '0 0 15px yellow'
        })
        Object.assign(homeScoreEl.style, {
            color:'#ffff69',
            textShadow: '0 0 15px yellow'
        })
    }


}

