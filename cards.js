
$(document).ready(function(){
$(".game_page").hide()
$('.buttontoplay').one("click",function(e){
$(".landing_page").hide();
$(".game_page").show();
})


let clicktimes = 0;
let cumulativeSum = 0;       
let cardValueDisplay = 0;
let scoreCounter = 0;
let cardDisplayImg = "";
let cardStackerImg = "";
let cardDisplayImg2 = "";


// HighScore

$('.highscorebox').text(scoreCounter)
function highScore (){
    if (cumulativeSum > scoreCounter){
        scoreCounter = cumulativeSum
    } else {
        scoreCounter = scoreCounter
    }
    $('.highscorebox').text(`HIGH SCORE : ${scoreCounter}`)
}
highScore();


// get random at Start/Onload

function getRandomNumInclusive1 (min,max){
    min = Math.ceil (min);
    max = Math.floor (max);
    let randomNum = Math.floor( Math.random()* (max - min)+ min );
    if (randomNum < 5) {
                
                cardValueDisplay = (randomNum * 10);
                cardStackerImg = document.getElementById("stackerimg2").src="Img/Minimalist Plains - web.png";
                document.getElementById("stackerimg3").src="Img/Minimalist Plains - web.png";
                
               
            } else {
                
                cardValueDisplay = (randomNum *10);
                cardStackerImg = document.getElementById("stackerimg2").src="Img/Minimalist Plains - web.png";
                document.getElementById("stackerimg3").src="Img/Minimalist Plains - web.png";
               
            }
        
$('.stackerButton').text(cardValueDisplay);  

}

getRandomNumInclusive1 (1,10);


// Intervals






function getRandomNumInclusive2 (){
    min = Math.ceil (1);
    max = Math.floor (10);
    let randomNum = Math.floor( Math.random()* (max - min)+ min );
    if (randomNum >= 1 && randomNum <= 2) {
                cardValueDisplay = (-300);
                cardStackerImg = document.getElementById("stackerimg2").src="Img/Minimalist Swamp - web.png";
                document.getElementById("stackerimg3").src="Img/Minimalist Swamp - web.png";
                
            } else if (randomNum >2 && randomNum <= 4) {
                cardValueDisplay = (randomNum *-30);
                cardStackerImg = document.getElementById("stackerimg2").src="Img/Minimalist Mountain - web.png";
                document.getElementById("stackerimg3").src="Img/Minimalist Mountain - web.png";
               
            } else if (randomNum > 4 && randomNum <= 8) {
                cardValueDisplay = (randomNum *25);
                cardStackerImg = document.getElementById("stackerimg2").src="Img/Minimalist Plains - web.png";
                document.getElementById("stackerimg3").src="Img/Minimalist Plains - web.png";
            } else if (randomNum > 8 && randomNum <= 10) {
                cardValueDisplay = (400);
                cardStackerImg = document.getElementById("stackerimg2").src="Img/Minimalist Island - web.png";
                document.getElementById("stackerimg3").src="Img/Minimalist Island - web.png";
            }
    $('.stackerButton').text(cardValueDisplay);      

}
// invokes only once on first click. if not it will keep invokng this and will have multiple layers of intervals.

function haha (){
$('.stackerButton').one("click",function(e){
    abc = setInterval (getRandomNumInclusive2,1000);
    timerX ();
})
}
haha ();
let abc = "";


//countdown timer function

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let x = setInterval(function timecounter () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `TIMER : ${minutes}:${seconds}`;
        console.log (timer)
        --timer;
        if (timer == -1){
            clearInterval (x);
            invokePopUp ();
            clearInterval (abc);

        }      
     }, 1000);
    
}


//timer to invoke the above fucntion
function timerX () {
    var seconds = 45 * 1,
        display = document.querySelector('.timer');
    startTimer(seconds, display);
};


// the click button that:

// captures display sum
// display values on cardStackerImg
// capture highScore
// and changes pictures of 3 layer cards

$('.stackerButton').click (function(e){
    cumulativeSum += cardValueDisplay;
    $('.display').text(cumulativeSum);
    $('.stackerButton').text(cardValueDisplay);
    highScore ();
    cardDisplayImg = document.getElementById("stackerimg2").src;
    cardDisplayImg2 = document.getElementById("displayimg2").src=cardDisplayImg;
    playsound()
   
})



//card flick animation - create class to invoke animation, then destroy class to repeat upon next click.
$(".stackerButton").click(function () {
    $("#stackerimg2").addClass ("animated");
    setTimeout (function(){
        $("#stackerimg2").removeClass ("animated");
    },800);
    
});

//cardshake - create class to invoke animation, then destroy class to repeat upon next click.


$(".stackerButton").click(function () {
    if (cardValueDisplay < 0) {
    $("#stackerimg3").addClass ("shakeonNegative");
    setTimeout (function(){
        $("#stackerimg3").removeClass ("shakeonNegative");
    },350);}
});




//game ends to replay.


function invokePopUp (){
            document.querySelector("#myModal").style.display = "block";
            $('.modal-content').text(`You got a SCORE of ${cumulativeSum}! \nGAME OVER`);
            let buttonDiv = document.createElement ('div');
            let replay = document.createElement ('a');
            let replayText = document.createTextNode ('REPLAY')
            buttonDiv.setAttribute ("class", "buttonDiv");
            replay.setAttribute ("class", "replayButton")
            replay.appendChild (replayText);
            buttonDiv.appendChild (replay);
            let popupBox = document.querySelector(".modal-content")
            popupBox.appendChild (buttonDiv)
            console.log (buttonDiv);
            console.log (replay);
            console.log (popupBox)
           
            $('.replayButton').click (function(e){
                document.querySelector("#myModal").style.display = "none";
                clearInterval (abc);
                getRandomNumInclusive1 (1,10);
                haha ();
                cumulativeSum = 0;
                $('.display').text(cumulativeSum);
            })
           
           
}

//card flick sound
function playsound(){
    let cardflickSound = document.getElementById ("cardflick");
    cardflickSound.play()
}

})




























