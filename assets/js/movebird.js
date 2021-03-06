//////////////////////////////////////
//  CS301 INTERNET APP DEV JAN 2019
//  Group Project 3: StarBird Game
//  Group JAAB (Jude, Alyssa, Apoorv, Becca)
//  Last edit: 1/14/2019
//  Purpose: Makes arrowkeys controllers for Bird
//////////////////////////////////////

/*
sources: 
https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-move-an-element-using-left-right-up-and-down-arrow-keys
https://jeremyckahn.github.io/keydrown/
*/

/*'ENTER': 13, 
  'W': 87,  
  'A': 65,
  'S': 83,
  'D': 68,
  'SPACE': 32,*/
var moveDist = 9;

function updateMoveDist() {
    var $speed = document.getElementById("speedValue");
    var $value = $speed.value;
    console.log("Current speed is: " + $value);
    if ($value < 0 || $value == undefined) {
        $value = 1;
    }
    moveDist = $value * 9;
}

kd.DOWN.down = function () {
    updateMoveDist();
    var $bird = $("#bird");
    var birdTop = $bird.position().top;
    var birdHeight = $bird.height();
    var birdBottom = birdTop + birdHeight;

    var $gameBox = $("#gameBox");
    var gameBoxTop = $gameBox.position().top;
    var gameBoxHeight = $gameBox.height();
    var gameBoxBottom = gameBoxTop + gameBoxHeight;
    //gameBoxBottom = $gameBox.height();
    var distance = gameBoxBottom - birdBottom;

    if (distance < moveDist) {
        $(".bird").finish().animate({
            bottom: gameBoxBottom
        });
    }
    else {
        $(".bird").finish().animate({
            top: "+=" + moveDist
        });
    }
};

kd.UP.down = function () {
    updateMoveDist();
    var $bird = $("#bird");
    var birdTop = $bird.position().top;

    var $gameBox = $("#gameBox");
    var gameBoxTop = $gameBox.position().top;

    var distance = birdTop - gameBoxTop;

    if (distance < moveDist) {
        $(".bird").finish().animate({
            top: "-=" + distance
        });
    }
    else {
        $(".bird").finish().animate({
            top: "-=" + moveDist
        });
    }
};

kd.LEFT.down = function () {
    updateMoveDist();
    var $bird = $("#bird");
    var birdLeft = $bird.position().left;

    var $gameBox = $("#gameBox");
    var gameBoxLeft = $gameBox.position().left;
    var distance = birdLeft - gameBoxLeft;
    
    if (distance < moveDist) {
        $(".bird").finish().animate({
            left: "-=" + distance
        });
    }
    else {
        $(".bird").finish().animate({
            left: "-=" + moveDist
        });
    }
};

kd.RIGHT.down = function () {
    updateMoveDist();
    var $bird = $("#bird");
    var birdLeft = $bird.position().left;
    var birdWidth = $bird.width();
    var birdRight = birdLeft + birdWidth;

    var $gameBox = $("#gameBox");
    var gameBoxLeft = $gameBox.position().left;
    var gameBoxWidth = $gameBox.width();
    var gameBoxRight = gameBoxLeft + gameBoxWidth;
    var distance = gameBoxRight - birdRight;

    if (distance < moveDist) {
        $(".bird").finish().animate({
            left: "+=" + distance
        });
    }
    else {
        $(".bird").finish().animate({
            left: "+=" + moveDist
        });
    }
};

kd.run(function () {
    kd.tick();
});
