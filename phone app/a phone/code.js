//--------------------------------------------------START-----------------------------------------------------------------
var size;
var password;
var search;
var call;
var Open;
var M;
var H;
var S;                                                     
//how the clock on the main screen works                            
//-----------------------------------------------*              
timedLoop(1000, function() {                  // *                     ____
  function time() {                           // *    | \     |---|   |       |          |
    var currentdate = new Date();             // *    |   \   |   |   |       |          |
    H = currentdate.getHours();               // *    |   |   |   |   |____   |    /\    | 
    M = currentdate.getMinutes();             // *    |   |   |---|   |       |   /  \   |
    S = currentdate.getSeconds();             // *    |   /   |  \    |       |  /    \  |
    setText("hour", 0+H);                     // *    | /     |   \   |____    \/      \/
    setText("min", M);                        // *    
    setText("sec",S);                         // *
  }                                           // *
  time();                                     // *
});                                           // *
//-----------------------------------------------*
//slide to unlock
onEvent("slider1", "input", function( ) {
	Open = getNumber("slider1");
	if (Open == 100) {                                       
	  setScreen("screen9");
	  stopTimedLoop();
	  
	}
});
//home button

onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("button2","click",function( ) {
  setScreen("screen5");
});
function Home() {
 setScreen("screen1");
}
onEvent("home1","click",function( ) {
Home();
});
onEvent("home2", "click", function( ) {
  Home();
});
onEvent("button3", "click", function( ) {
  setScreen("screen3");
});
onEvent("home3", "click", function( ) {
  Home();
});
onEvent("dropdown1", "change", function( ) {
  size = getText("dropdown1");
setProperty("text_area1", "font-size", size);
    
});
onEvent("button4","click",function( ) {
  setScreen("screen6");
});
// DREWgoogle-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
onEvent("text_input1","change",function( ){
search=getText("text_input1");
});
onEvent("button15","click",function( ) {
open("https://google.com"+ "/search?q=" +search);
});
onEvent("button16", "click", function( ) {
 setScreen("screen1");
   
});
onEvent("button5", "click", function( ) {
 setScreen("screen8");
   
});
onEvent("button17", "click", function( ) {
 setScreen("screen1");
   
});
//phone-------------------------------------------------------------
onEvent("text_input2","change",function( ){
call=getText("text_input2");

});
onEvent("button10","click",function( ) {
open("tel:"+call);
showElement("image13");

});
onEvent("button6", "click", function( ) {
  open("https://www.marketwatch.com/investing/stock/live");
  
});
onEvent("text_input3","change",function( ){
password=getText("text_input3");
});


onEvent("button18", "click", function( ) {
    if (password==="0374818") {
  setScreen("screen1");
}

  });
    
onEvent("button9", "click", function( ) {
 setScreen("screen10");
   
});
onEvent("button21", "click", function( ) {
setScreen("screen1");
    
});

onEvent("button24", "click", function( ) {
  setScreen("screen1");
});

onEvent("button8", "click", function( ) {
  setScreen("screen12");
});

onEvent("button7", "click", function( ) {
  setScreen("Screen14");
});

onEvent("button25", "click", function( ) {
  setScreen("screen15");
});


onEvent("button28", "click", function( ) {
  setScreen("screen1");
});


onEvent("button26", "click", function( ) {
  setScreen("screen11");
});

onEvent("button23", "click", function( ) {
  setScreen("screen1");
});


//---------------------------------------------------------END------------------------------------------------------------



// for the disigin maker app
//------------------------------------------------------------------------------------------------------------------------

var receivername;
var age = 6;
var  price = "25";
var output;

onEvent("Nameofreceiver", "change", function( ) {
  receivername = getText("Nameofreceiver");
  updateScreen();
});

onEvent("GiftPrice", "change", function( ) {
  price = getText("GiftPrice");
  updateScreen();
});
onEvent("Upbutton", "click", function( ) {
  age = age + 1;
  setText("Age_text_area", age);
  updateScreen();
});
onEvent("Downbutton", "click", function( ) {
  age = age - 1;
  setText("Age_text_area", age);
  updateScreen();
});
//This considers the input and update the screen
function updateScreen() {
  if (price == "100" && (age >= 6 && age <= 10)) {
    output = "Lego set!";
  } else if ((price == "100" && (age >= 11 && age <= 20))) {
    output = "Ipad";
  } else if ((price == "100" && (age >= 21 && age <= 30))) {
    output = "Amazon gift card!";
  } else if ((price == "100" && (age >= 31 && age <= 40))) {
    output = "Perzonalized five star plush robe!";
  } else if ((price == "100" && (age >= 41 && age <= 50))) {
    output = "Viktor Rolf perfume!";
  } else if ((price == "100" && (age >= 51 && age <= 60))) {
    output = "Engraved family necklace!";
  } else if ((price == "100" && (age >= 61 && age <= 70))) {
    output = "Silvia Christmas gift set!";
  } else if ((price == "100" && (age >= 71 && age <= 80))) {
    output = "Engravable gold birthstone heart locket!";
  }
  if (price == "75" && (age >= 6 && age <= 10) ) {
    output = "Privacy bed play tent";
  } else if ((price == "75" && (age >= 11 && age <= 20))) {
    output = "Gold custome engraved name birtstone!";
  } else if ((price == "75" && (age >= 21 && age <= 30))) {
    output = "Perzonalized bluetooth photo night light!";
  } else if ((price == "75" && (age >= 31 && age <= 40))) {
    output = "Birthstone necklace!";
  } else if ((price == "75" && (age >= 41 && age <= 50))) {
    output = "Premium canva!";
  } else if ((price == "75" && (age >= 51 && age <= 60))) {
    output = "FTD flower fruits delivery set!";
  } else if ((price == "75" && (age >= 61 && age <= 70))) {
    output = "Wine set!";
  } else if ((price == "75" && (age >= 71 && age <= 80))) {
    output = "Personalized Tender Hearts throw!";
  }
  if (price == "50" && (age >= 6 && age <= 10)) {
    output = "Custom name bracelet charm!";
  } else if ((price == "50" && (age >= 11 && age <= 20)) ) {
    output = "Customized night light projection!";
  } else if ((price == "50" && (age >= 21 && age <= 30))) {
    output = "Custom blanket!";
  } else if ((price == "50" && (age >= 31 && age <= 40))) {
    output = "Lovery Vanilla Coconut home spa body care gift set!";
  } else if ((price == "50" && (age >= 41 && age <= 50))) {
    output = "Personalized engraved secret message heart!";
  } else if ((price == "50" && (age >= 51 && age <= 60))) {
    output = "Personalized garden tote and tools!";
  } else if ((price == "50" && (age >= 61 && age <= 70))) {
    output = " Custom christmas pajamas!";
  } else if ((price == "50" && (age >= 71 && age <= 80))) {
    output = "Voluspa Japonica archive candle set!";
  }
  if (price == "25" && (age >= 6 && age <= 10)) {
    output = "Disney Collection Toys!";
  } else if ((price == "25" && (age >= 11 && age <= 20))) {
    output = "Moon shaped night light!";
  } else if ((price == "25" && (age >= 21 && age <= 30))) {
    output = "Photo magic sequias personalized pillow !";
  } else if ((price == "25" && (age >= 31 && age <= 40))) {
    output = "Pair of boots!";
  } else if ((price == "25" && (age >= 41 && age <= 50))) {
    output = "Ferrero Rocher collection!";
  } else if ((price == "25" && (age >= 51 && age <= 60))) {
    output = "Custom children's name Granny's mug!";
  } else if ((price == "25" && (age >= 61 && age <= 70))) {
    output = "Yves Rocher relaxing lavadin gift set!";
  } else if ((price == "25" && (age >= 71 && age <= 80))) {
    output = "Catalonia Poncho!";
  }
  //This consider the input and choose the gift in output.
  var myText = "The perfect gift for " + receivername;
  myText = myText + ", is a " + output;
  setText("mainArea", myText);
}

//-----------------------------------------------------------end-----------------------------------------------------------
//remind app
//initialize
var reminderList = [];
var index = 0;
var reminder = "";

setProperty("reminderOutput", "text", "Add Reminders!!");

//events
onEvent("rightButton", "click", function( ) {
  if (index < reminderList.length - 1) {
    index = index + 1;
  }
	updateScreen();
});

onEvent("leftButton", "click", function( ) {
  if (index > 0) {
    index = index - 1;
  }
	updateScreen();
});

onEvent("addButton", "click", function( ) {
	reminder = getText("reminderInput");
	appendItem(reminderList, reminder);
	setText("reminderInput", "");
	updateScreen();
});

//functions
function updateScreen() {
  setProperty("countOutput", "text", index + 1);
  setProperty("reminderOutput", "text", reminderList[index]);
}
//----------------------------------------------------------------------------------------------------------------------
// Crossy Code
// Kurt Kaiser
// kurtkaiser.us

// Declaring global variables
// Entire program can use and change them
var moveCount = 0;
var lives = 3;
var playerStepSize = 20;
var keyUp = true;
var levelCount = 1;
var boost = 0;
var boostCount = 3;
var highScores = [0, 0, 0, 0, 0];
var speedIncrease = 0;
var bonusItem = "bonusHeart";
setPosition("rightBtn", -250, -250);
setPosition("leftBtn", -200, -200);
setPosition("upBtn", -250, -250);
setPosition("boostBtn", -250, -250);
if(randomNumber(1, 2) == 2){
  setText("tipLabel", "Tip: Click or tap for on screen buttons.");
}
// Starts the game
onEvent("startButton", "click", function() {
  setScreen("gameScreen");
  moveEnemy("cartEnemy", "truckEnemy", "motorcycleEnemy");
});
// Controls for keyboard play
onEvent("gameScreen", "keydown", function(event) {
  if (keyUp){
  keyUp = false;
  playerMovement(event.key);
  }
});

// Controls for mouse or touch screen play
onEvent("gameScreen", "click", function( ) {
setPosition("upBtn", 198, 378);
setPosition("rightBtn", 260, 415);
setPosition("leftBtn", 198, 415);
setPosition("boostBtn", 0, 415);
});
onEvent("upBtn", "click", function() {
  playerMovement("Up");
  keyUp = true;
});
onEvent("leftBtn", "click", function() {
  playerMovement("Left");
  keyUp = true;
});
onEvent("rightBtn", "click", function() {
  playerMovement("Right");
  keyUp = true;
});
onEvent("boostBtn", "click", function() {
  playerMovement("Shift");
  keyUp = true;
});

// Moves player in the appropriate direction
function playerMovement(key){
  var xPlayer = getXPosition("player");
  var yPlayer = getYPosition("player");
  if (key == "Up") {
    setPosition("player", xPlayer, (yPlayer - playerStepSize) - boost);
    if (obstacleCollision()) {
      setPosition("player", xPlayer, yPlayer + playerStepSize + boost);
      } else {
        setText("scoreNumLabel", moveCount);
        moveCount++;
      }
    if (yPlayer < 0) {
        setProperty("player", "y", 410);
        stopTimedLoop();
        levelCount++;
        boost = 0;
        setText("levelLabel", levelCount);
        moveEnemy("cartEnemy", "truckEnemy", "motorcycleEnemy");
    
    }
  } else if (key == "Right") {
    setPosition("player", xPlayer + 25, yPlayer);
    if (xPlayer > 290) {
      setProperty("player", "x", 0);
    }
  } else if (key == "Left") {
    setPosition("player", xPlayer - 25, yPlayer);
    if (xPlayer < -10) {
      setProperty("player", "x", 280);
    }
  } else if (key == "Down") {
    setText("scoreNumLabel", moveCount);
    setPosition("player", xPlayer, yPlayer + playerStepSize - boost);
    if (obstacleCollision()) {
      setPosition("player", xPlayer, yPlayer - playerStepSize - boost);
      moveCount++;
    }
    moveCount--;
    if (yPlayer > 430) {
      setProperty("player", "y", 410);
    }
  } else if (key == "Shift") {
    boost = 20;
    boostCount--;
    hideElement("boost" + (3 - boostCount));
    setPosition("obstacle1Image", -250, -250);
    setPosition("obstacle2Image", -200, -200);
    setPosition("obstacle3Image", -250, -250);
  }
  checkForBonus();
}

// Confirms player released key, cant hold key to move
onEvent("gameScreen", "keyup", function(event) {
  if (event.key == "Right" || "Up" || "Left" || "Down") {
    keyUp = true;
  }
});

// Checks if player is touching a bonus item
function checkForBonus() {
  if (checkCollision(bonusItem, 55, 35)) {
    setPosition(bonusItem, -400, -400);
    if (bonusItem == 'bonusHeart') {
      showElement('heart' + (3 - lives));
      lives++;
      bonusItem = 'bonusBoost';
    } else {
      boostCount++;
      showElement('boost' + boostCount);
      bonusItem = 'bonusHeart';
    }
  }
}
// Uses timed loop to move enemys forward every 10 miliseconds
function moveEnemy(id1, id2, id3) {
  var id1X = 1;
  var id2X = 230;
  var id3X = 1;
  var id1Y = randomNumber(270, 320);
  var id2Y = randomNumber(170, 220);
  var id3Y = randomNumber(10, 110);
  var colors = getColors();
  setProperty(id1, "icon-color", colors[0]);
  setProperty(id2, "icon-color", colors[1]);
  setProperty(id3, "icon-color", colors[2]);
  getObstacles(colors[3], colors[4], colors[5]);
  getBonusItems();
  setProperty("gameScreen", "background-color", colors[6]);
  speedIncrease = speedIncrease + levelCount * (randomNumber(0, 3) * 0.03);
  timedLoop(10, function() {
    id1X = id1X + 1 + speedIncrease;
    id2X = id2X - (1 + speedIncrease);
    id3X = (id3X + 1.1) + speedIncrease;
    setPosition(id1, id1X, id1Y);
    setPosition(id2, id2X, id2Y);
    setPosition("levelLabel", id2X + 47, id2Y + 15);
    setPosition(id3, id3X, id3Y);
    if (id1X > 330) {
      id1X = -90;
    }
    if (id2X < -180) {
      id2X = 300;
    }
    if (id3X > 330) {
      id3X = -90;
    }
    if (checkCollision(id1, 40, 35) || checkCollision(id2, 40, 40) || checkCollision(id3, 53, 35)) {
      enemyCollision();
    }
  });
}

// Randomizes the appearance of obstacles
function getObstacles(color1, color2, color3) {
  var obstacleNum = randomNumber(1, 3);
  setPosition("obstacle2Image", -250, -250);
  setPosition("obstacle1Image", -200, -200);
  setPosition("obstacle3Image", -250, -250);
  if (obstacleNum == 1) {
    setPosition("obstacle1Image", randomNumber(-10, 220), randomNumber(60, 340));
    setProperty("obstacle1Image", "icon-color", color1);
  } else if (obstacleNum == 2) {
    setProperty("obstacle1Image", "icon-color", color1);
    setProperty("obstacle2Image", "icon-color", color2);
    setPosition("obstacle1Image", randomNumber(-10, 220), randomNumber(60, 340));
    setPosition("obstacle2Image", randomNumber(-10, 220), randomNumber(60, 340));
  } else if (obstacleNum == 3) {
    setProperty("obstacle1Image", "icon-color", color1);
    setProperty("obstacle2Image", "icon-color", color2);
    setProperty("obstacle3Image", "icon-color", color3);
    setPosition("obstacle1Image", randomNumber(-10, 220), randomNumber(60, 340));
    setPosition("obstacle2Image", randomNumber(-10, 220), randomNumber(60, 340));
    setPosition("obstacle3Image", randomNumber(-10, 220), randomNumber(60, 340));
  }
}

// Randomizes the appearance of bonus items
function getBonusItems() {
  setPosition('bonusHeart', -400, -400);
  setPosition('bonusBoost', -400, -400);
  var bonusNum = randomNumber(1, 6);
  if (lives < 3 && bonusNum == 1) {
    setPosition('bonusHeart', randomNumber(20, 210), randomNumber(60, 360));
    bonusItem = "bonusHeart";
  } else if (boostCount < 3 && bonusNum == 4) {
    setPosition('bonusBoost', randomNumber(20, 210), randomNumber(60, 360));
    bonusItem = "bonusBoost";
  }
}

// Randomizes the item colors for items, each unique
function getColors() {
  var color1 = randomNumber(0, 255);
  var color2 = randomNumber(0, 255);
  var color3 = randomNumber(0, 255);
  var light = color1 < 60 && color2 < 60 && color3 < 60;
  var similar = Math.abs(color1 - color2) + Math.abs(color1 - color3) < 60;
  var pastel = color1 > 120 && color2 > 120 && color3 > 120;
  if (light || pastel || similar) {
    color1 = randomNumber(150, 255);
    color2 = randomNumber(50, 100);
    color3 = randomNumber(50, 100);
  }
  var colors = [];
  var id1Color = 'rgb(' + color1 + ' , ' + color2 + ',' + color3 + ')';
  var id2Color = 'rgb(' + color2 + ' , ' + color3 + ',' + color1 + ')';
  var id3Color = 'rgb(' + color3 + ' , ' + color1 + ',' + color2 + ')';
  var obstacle1Color = 'rgb(' + color2 + ' , ' + color1 + ',' + color3 + ')';
  var obstacle2Color = 'rgb(' + color1 + ' , ' + color3 + ',' + color2 + ')';
  var obstacle3Color = 'rgb(' + color1 + ' , ' + color3 + ',' + color3 + ')';
  var levelColor = 'rgba(' + color3 + ' , ' + color2 + ',' + color1 + ', 0.20 )';
  appendItem(colors, id1Color);
  appendItem(colors, id2Color);
  appendItem(colors, id3Color);
  appendItem(colors, obstacle1Color);
  appendItem(colors, obstacle2Color);
  appendItem(colors, obstacle3Color);
  appendItem(colors, levelColor);
  return colors;
}

// Checks if items are touching the player
function checkCollision(enemy, xArea, yArea) {
  if (yArea > Math.abs(getImageYCenter("player") - getImageYCenter(enemy))) {
    if (xArea > Math.abs(getImageXCenter("player") - getImageXCenter(enemy))) {
      return true;
    }
  }
  return false;
}

// Used by checkCollision to get x value
function getImageXCenter(image) {
  var x = getXPosition(image);
  var width = getProperty(image, "width");
  var xCenter = x + width / 2;
  return xCenter;
}

// Used by checkCollision to get y value
function getImageYCenter(image) {
  var y = getYPosition(image);
  var height = getProperty(image, "height");
  var yCenter = y + height / 2;
  return yCenter;
}

// Decrease lives, go to game if 0
function enemyCollision() {
  lives--;
  stopTimedLoop();
  if (lives < 1) {
    hideElement("winImage");
    showElement("smileImage");
    setScreen("gameOverScreen");
    if (highScores[0] == 0) {
      highScores = [moveCount, moveCount, moveCount, moveCount, moveCount];
      setText("recentScore1", moveCount);
      setText("recentLevel1", levelCount);
      setText("recentScore2", moveCount);
      setText("recentLevel2", levelCount);
      setText("recentScore3", moveCount);
      setText("recentLevel3", levelCount);
      setText("recentScore4", moveCount);
      setText("recentLevel4", levelCount);
      setText("recentScore5", moveCount);
      setText("recentLevel5", levelCount);
    }
    for (var i = 0; i < highScores.length; i++) {
      if (moveCount > highScores[i]) {
        highScores[i] = moveCount;
        setText("recentScore" + (i + 1), moveCount);
        setText("recentLevel" + (i + 1), levelCount);
        setText("overLabel", "High Score!");
        setProperty("gameOverScreen", "background-color", "orange");
        hideElement("smileImage");
        showElement("winImage");
        i = 10;
      }
    }
    setText("scoreNumOver", moveCount);
    setText("levelNumOver", levelCount);
  } else {
    setPosition("player", 140, 410);
    hideElement("heart" + (3 - lives));
    moveEnemy("cartEnemy", "truckEnemy", "motorcycleEnemy");
  }
}

// Check for obstacle collision, move player
function obstacleCollision(){
  for(var i=1; i < 4; i++){
    if (checkCollision("obstacle"+ i +"Image", 60, 15)){
      return true;
    }
  }
  return false;
}

// Retry button on game over screen
onEvent("retryBtn", "click", function() {
  setScreen("gameScreen");
  moveEnemy("cartEnemy", "truckEnemy", "motorcycleEnemy");
  setPosition('bonusHeart', -400, -400);
  setPosition('bonusBoost', -400, -400);
  moveCount = 0;
  levelCount = 1;
  lives = 3;
  boostCount = 3;
  speedIncrease = 0;
  setText("scoreNumLabel", moveCount);
  setText("levelLabel", levelCount);
  setPosition("player", 140, 410);
  showElement("heart1");
  showElement("heart2");
  showElement("boost1");
  showElement("boost2");
  showElement("boost3");
});
//------------------------------------------------------------------------------------------------------------------------
//calculater app

onEvent("Home_Trigger", "click", function( ) {
  setScreen("screen1");
});
var num1 = -1;
var num2 = -1;
var sign = 0;
var full = 0;

onEvent("0", "click", function() {
  updateNumbers(0);
});
onEvent("1", "click", function() {
  updateNumbers(1);
});
onEvent("2", "click", function() {
  updateNumbers(2);
});
onEvent("3", "click", function() {
  updateNumbers(3);
});
onEvent("4", "click", function() {
  updateNumbers(4);
});
onEvent("5", "click", function() {
  updateNumbers(5);
});
onEvent("6", "click", function() {
  updateNumbers(6);
});
onEvent("7", "click", function() {
  updateNumbers(7);
});
onEvent("8", "click", function() {
  updateNumbers(8);
});
onEvent("9", "click", function() {
  updateNumbers(9);
});

//Clears all values and labels
onEvent("Clear", "click", function() {
  num1 = -1;
  num2 = -1;
  sign = 0;
  setText("Output", "");
  setText("Input", " =");
  full = 0;
});

//Sends a signal when a sign button is pressed
onEvent("x", "click", function( ) {
  updateSign("x");
});
onEvent("-", "click", function( ) {
  updateSign("-");
});
onEvent("+", "click", function( ) {
  updateSign("+");
});
onEvent("÷", "click", function( ) {
  updateSign("÷");
});

//Evaluates the equation
onEvent("=", "click", function( ) {
  if (num2 == -1){
    if (sign == 0){
      if (num1 == -1){
        setText("Output", "");
      }
    }
  }
  else {
    if (sign == 1){
      setText("Output", num1 + num2);
      }
    if (sign == 2){
      setText("Output", num1 - num2);
      }
    if (sign == 3){
      setText("Output", num1 * num2);
      }
    if (sign == 4){
      setText("Output", num1 / num2);
      }
    full = 1;
  }
});

//Updates what text is in the input label
function updateInput() {
   if (num1 != -1) {
     if(sign != 0){
       if(num2 != -1){
         if (full == 0){
           if (sign == 1) {
           setText("Input", num1 + "+" + num2 + " =");
         }
         if (sign == 2) {
           setText("Input", num1 + "-" + num2 + " =");
         }
         if (sign == 3) {
           setText("Input", num1 + "x" + num2 + " =");
         }
         if (sign == 4) {
           setText("Input", num1 + "÷" + num2 + " =");
         }
         }
       }
        else{
          if (sign == 1) {
           setText("Input", num1 + "+" + " =");
         }
          if (sign == 2) {
           setText("Input", num1 + "-" + " =");
         }
          if (sign == 3) {
           setText("Input", num1 + "x" + " =");
         }
          if (sign == 4) {
           setText("Input", num1 + "÷" + " =");
         }
        }
     }
      else{
        setText("Input", num1 + " =");
      }
   }
    else{
      setText("Input", "=");
  }
}

//Updates each number in the equation
function updateNumbers(n) {
  if (num1 == -1) {
    num1 = n;
  } else {
    if (sign == 0){
      num1 = num1*10 + n;
    } 
      else {
        if(num2 == -1){
          num2 = n;
        }
        else {
          if (full == 0){
            num2 = num2*10 + n;
          }
        }
      }
  }
  updateInput();
}

//updates what sign is inputted
function updateSign(n) {
  if (sign == 0){
    sign =checkSign(n);
  }
  updateInput();
}

//converts the string input of the sign into a numeric value
function checkSign(n) {
  if (n == "+") {
      return 1;
    }
    if (n =="-") {
      return 2;
    }
    if (n =="x") {
      return 3;
    }
    if (n =="÷") {
      return 4;
    }
}
//------------------------------------------------------------------------------------------------------------------------
//radio
var channal;
onEvent("dropdown2", "change", function( ) {
  channal = getText("dropdown2");
  stopMusic();
  
});
onEvent("button19","click",function( ) {
if (channal == "251.3") 
 (playSound( "assets/Country-Songs-2021-Best-Country.mp3", true));
 else if ((channal == "93.5")) {
  playSound( "assets/Best-Remixes-Of-Popular-Songs-20.mp3", true);
} else if ((channal == "102.5")) {
  playSound( "assets/Best-Mashup-Pop-Songs-2018-2-The.mp3", true);
} else if ((channal == "95.3")) {
  playSound("assets/category_instrumental/harpe_music_2.mp3", true);
}
});
function stopMusic() {
  stopSound();
}
onEvent("button29", "click", function( ) {
stopSound("assets/Best-Remixes-Of-Popular-Songs-20.mp3");
    
});
//------------------------------------------------------------------------------------------------------------------------

//});
//onEvent("button27", "click", function( ) {
//  setScreen("screen14");
//});
//onEvent("button30", "click", function( ) {
//  setScreen("screen1");
//});





















































