# ProjektCards.github.io
Very much like the el clasico UNO game but with a twist i.e. with added reaction time, within a constrained time and to beat your past self!

### Technologies used
1. HTML 
1. CSS 
1. Javascript / JQuery

### Goal of the game
1. The goal of the game is to achieve a highscore. Highscores are captured in the top neon purple box.
1. Once the game is over, the previous highscore is retained in the top box. Play again to beat your previous score.

### How it works
1. The objective of the game is to click on the bottom stack of cards to flick the cards over to the top pile.
1. The Discard pile (top) records the current score of the cards stacked into the pile. Clicking the bottom stack will add the value of the current top card to the discard pile.
1. The deck consist of 4 different cards which have different values to be stacked to the pile: 
    1. Red (fireball) card (Negative value @ a randomised negative (-30) multiplier with a 30% probability)
    1. Black (skull) card (this is a bonus negative card : Negative value with a constant negative -400 pts with a 10% probability)
    1. White (sun) card (Positive value @ a randomised positive (+20) multiplier with a 40% probability)
    1. Blue (droplet) card (this is a bonus card : Positive value with a constant positive 200 pts with a 20% probability)
1. Test your reaction by trying to clicking on either white or blue to add to the top discard pile. The sum captured in the discard pile will be captured in the highscore bar (ref. Goal of the game No.1)
1. A red or black card will deduct the pile sum (total sum will go to negative). Try avoiding the reds or the blacks.
1. a 1000ms interval is set to randomise the cards. Wait for 1sec for the cards to reshuffle if trying to avoid the reds or the black cards.
1. Now go try it out.

### The big bang
The game is created on Javascript/Jquery, CSS and HTML.

Steps to create the game:

1. HTML
    1. Using HTML, we lay the structure of the game. 
    1. Creating the front page with a section in HTML (with 2 boxes, i.e. 1 for header, the other for button;
    1. Next create another section in HTML for the game (3 main boxes created: high score, central grid and timer box)
    
1. JavaScript / JQuery
    1. Once the structure is completed, proceed to create the game mechanics / logic;
    1. There are ? parts to this game:
    1. Bottom Stack of cards = create randomised logic using Math.random combined with (if) logic to create both negative and positive. This is for when windows.onload.
    1. Using the same as the above, but for clicks, combining randomising with.one (to make it repeat only once/first click) and time out to randomise within a certain timeframe.
    1. Once that is set, a Score function is created to track display card pile and also the highscore combined with onClick or .click.
    For every click it records the sum of the randmised number in the bottom pile.
    1. Next is creating a function for timer. Timer combined with set interval and upon timer = 0, the game resets with the previous highscore recorded.
    
1. CSS 
    1. Once Javascript is outta the way, time to give the game some clothes.
    1. Clothe the game with pictures from google
    1. Once that is done, test the game again.
    1. Now to pipe the icing on the cake, we add on the animations into CSS, combining animations for rotation and ease-in linear direction, I'm able to get the card to rotate forward upon the .click jquery function. 
    1. also add card "flick" sounds to the .click function to get the "flicking" SFX.
    
### Hitting the brick wall
1. having the score tracker to record the last number click for every time the number randomises instead of tracking the number everytime it randomises. (have a global variable set to record it).
1. having the card picture flip / change according to the randomised number (combine (if) logic and DOM getelementbyID to select the div and reassign the picture).
1. Performing card animation and card shake (create 3 seperate Divs and stack them upon each other using position of absolute and relative and assigning each animation upon click).



    
    










