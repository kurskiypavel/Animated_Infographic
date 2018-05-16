/* jslint browser: true */
/* global $, TweenMax, window, Power2 */

// hides all screens except for screen 1
$("section:gt(0)").hide();

// set initial screen number
var screenNum = 1;
// transition duration
var duration = 1;
// delay for starting screen animations
// initially set to 2s to allow the preloader to show and then update in loadScreen1
var delay = 0;

// hide/show navigation functions
function hideNav() {
    TweenMax.to(".next", 0.25, {
        right: -100,
        ease: Power2.easeOut
    });

    TweenMax.to(".prev", 0.25, {
        left: -100,
        ease: Power2.easeOut
    });
}

function showNav() {
    TweenMax.to(".next", 0.25, {
        right: 20,
        ease: Power2.easeOut
    });

    TweenMax.to(".prev", 0.25, {
        left: 20,
        ease: Power2.easeOut
    });
}

// next and previous navigation functions
function showNextScreen() {
    // targets the current screen
    var currentScreen = "section:nth-child(" + screenNum + ")";
    // sets next screen number
    screenNum++;
    // targets the next screen
    var nextScreen = "section:nth-child(" + screenNum + ")";
    // fades out navigation
    hideNav();
    // transitions current screen out
    TweenMax.fromTo(currentScreen, duration, {
        x: 0
    }, {
        delay: 0.5,
        x: -960,
        ease: Power2.easeInOut
    });
    // shows next screen
    $(nextScreen).show();
    // transitions next screen in
    TweenMax.fromTo(nextScreen, duration, {
        x: 960
    }, {
        delay: 0.5,
        x: 0,
        ease: Power2.easeInOut,
        onComplete: function () {
            // hide current screen
            $(currentScreen).hide();
            // fade on navigation
            showNav();
        }
    });
    // load function to animate on contents of screen
    window["loadScreen" + screenNum]();

}

function showPrevScreen() {
    // targets the current screen
    var currentScreen = "section:nth-child(" + screenNum + ")";
    // sets next screen number
    screenNum--;
    // targets the next screen
    var prevScreen = "section:nth-child(" + screenNum + ")";
    // fades out navigation
    hideNav();
    // transitions current screen out
    TweenMax.fromTo(currentScreen, duration, {
        x: 0
    }, {
        delay: 0.5,
        x: 960,
        ease: Power2.easeInOut
    });
    // shows previous screen
    $(prevScreen).show();
    // transitions next screen in
    TweenMax.fromTo(prevScreen, duration, {
        x: -960
    }, {
        delay: 0.5,
        x: 0,
        ease: Power2.easeInOut,
        onComplete: function () {
            // hide current screen
            $(currentScreen).hide();
            // fade on navigation
            showNav();
        }
    });
    // load function to animate on contents of screen
    window["loadScreen" + screenNum]();
}

// // next and previous button clicks
$(".next").click(showNextScreen);
$(".prev").click(showPrevScreen);

// fade on screen 1 on page load and then hide loading gif
TweenMax.from("main", 1, {
    delay: 2,
    opacity: 0
})

// functions for loading on content of each screen
// LOAD SCREEN 1 ///////////////////////////////////////////////
function loadScreen1() {

    TweenMax.from("#screen1 h1", 1, {
        delay: delay,
        opacity: 0
    });

    // update delay to wait for screen transition
    delay = duration + 0.5;
    sectionOneLoad();
}

// animate on content of screen 1 on page load
loadScreen1();

// LOAD SCREEN 2 ///////////////////////////////////////////////
function loadScreen2() {

    sectionTwoLoad();

    // animate content on with delays
    TweenMax.from("#screen2 h1", 0.5, {
        delay: delay,
        opacity: 0,
        ease: Elastic.easeOut
    });
    TweenMax.from("#ele1", 0.5, {
        delay: delay + 0.25,
        scale: 0,
        ease: Elastic.easeOut
    });

    TweenMax.from("#ele2", 0.5, {
        delay: delay + 0.5,
        scale: 0,
        ease: Elastic.easeOut
    });

    TweenMax.from("#ele3", 0.5, {
        delay: delay + 0.75,
        scale: 0,
        ease: Elastic.easeOut
    });

    TweenMax.from("#ele4", 0.5, {
        delay: delay + 1,
        scale: 0,
        ease: Elastic.easeOut
    });
}

// LOAD SCREEN 3 ///////////////////////////////////////////////
function loadScreen3() {

    sectionThreeLoad();
    // animate content on with delays
    TweenMax.from("#screen3 h1", 1, {
        delay: delay,
        opacity: 0
    });

    // multi-tween hover
    TweenMax.from("#ele5", 0.5, {
        delay: delay + 0.25,
        left: -100,
        ease: Power2.easeOut
    });

    // single-tween hover
    TweenMax.from("#ele6", 0.5, {
        delay: delay + 0.5,
        top: -100,
        ease: Power2.easeOut
    });
    TweenMax.from("#ele7", 0.5, {
        delay: delay + 0.75,
        bottom: -100,
        ease: Power2.easeOut
    });

    $("#ele7").hover(function () {
        TweenMax.to(this, 1, {
            width: 200,
            height: 200,
            ease: Power2.easeOut
        });
        TweenMax.to("#ele7content", 0.5, {
            delay: 0.5,
            opacity: 1
        })
    }, function () {
        TweenMax.to("ele8hover", 1, {
            right: -100,
            ease: Power2.easeOut
        });
    });

    TweenMax.from("#ele8", 0.5, {
        delay: delay + 0.75,
        bottom: -100,
        ease: Power2.easeOut
    });

    $("#ele8").hover(function () {
        TweenMax.to("ele8hover", 1, {
            right: 100,
            ease: Power2.easeOut
        });
    }, function () {
        TweenMax.to("ele8hover", 1, {
            right: -100,
            ease: Power2.easeOut
        });
    });

}

// LOAD SCREEN 4 ///////////////////////////////////////////////
function loadScreen4() {

    sectionFourLoad();

    // animate content on with delays
    TweenMax.from("#screen4 h1", 1, {
        delay: delay,
        opacity: 0
    });

    TweenMax.from("#ele9", 0.5, {
        delay: delay + 0.5,
        top: -200,
        ease: Elastic.easeOut
    });


    TweenMax.from("#ele10", 0.5, {
        delay: delay + 0.5,
        right: -100,
        ease: Elastic.easeOut
    });

    TweenMax.from("#ele11", 0.5, {
        delay: delay + 0.5,
        right: -100,
        ease: Elastic.easeOut
    });

    TweenMax.from("#ele12", 0.5, {
        delay: delay + 0.5,
        left: -100,
        ease: Elastic.easeOut
    });
    // click to execute multiple tweens
    $("#ele9").click(function () {
        TweenMax.fromTo("#bar1", 1, {
            height: 5
        }, {
            height: 150,
            ease: Power2.easeOut
        });
        TweenMax.fromTo("#bar2", 1, {
            height: 5
        }, {
            height: 90,
            ease: Power2.easeOut
        });
        TweenMax.fromTo("#bar3", 1, {
            height: 5
        }, {
            height: 70,
            ease: Power2.easeOut
        });
        TweenMax.fromTo("#bar4", 1, {
            height: 5
        }, {
            height: 50,
            ease: Power2.easeOut
        });
        TweenMax.fromTo("#bar5", 1, {
            height: 5
        }, {
            height: 30,
            ease: Power2.easeOut
        });
    });

}

// LOAD SCREEN 5 ///////////////////////////////////////////////
function loadScreen5() {

    // animate content on with delays
    TweenMax.from("#screen5 h1", 1, {
        delay: delay,
        opacity: 0
    });

    TweenMax.from("#ele13", 0.5, {
        delay: delay + 0.25,
        left: -100,
        ease: Power2.easeOut
    });

    TweenMax.from("#ele14", 0.5, {
        delay: delay + 0.25,
        left: -100,
        ease: Power2.easeOut
    });



    // click/close to view overlay content


    // click/close to view overlay content


}

// LOAD SCREEN 6 ///////////////////////////////////////////////
function loadScreen6() {

    // animate content on with delays
    TweenMax.from("#screen6 h1", 1, {
        delay: delay,
        opacity: 0
    });

    TweenMax.from("#ele15", 0.5, {
        delay: delay + 0.5,
        opacity: 0
    });


    // looping animation using yoyo & repeat properties


}






/* ANIMATION Kurskii */

// Section 1




function sectionOneLoad() {
    TweenMax.from(".arrow-hint", 0.5, {
        delay: 7,
        top: "0px",
        right: "0px",
        opacity: 0,
        rotation: "0"
    });

    TweenMax.from(".player-btn", 2, {
        delay: 7,
        opacity: 0,
        ease: Power2.easeOut
    });
}



// Section 2


function sectionTwoLoad() {

    // Earth rollIn
    TweenMax.from("#rollIn", 2, {
        delay: 1,
        rotation: "180",
        right: "-250px"
    })



    // left_lang 
    TweenMax.from("#left_langs", 1, {

        delay: delay + 1,
        opacity: 0
    })


    TweenMax.from("#right_langs", 1, {
        delay: 3,
        opacity: 0
    })



    //add chart HTML, CSS and Animation
    // click to execute multiple tweens
    $("#ele9").click(function () {

        TweenMax.fromTo("#bar1", 1, {
            height: 5
        }, {
            height: 150,
            ease: Power2.easeOut
        });

        TweenMax.fromTo("#bar2", 1, {
            height: 5
        }, {
            height: 90,
            ease: Power2.easeOut
        });

        TweenMax.fromTo("#bar3", 1, {
            height: 5
        }, {
            height: 50,
            ease: Power2.easeOut
        });

        TweenMax.fromTo("#bar4", 1, {
            height: 5
        }, {
            height: 170,
            ease: Power2.easeOut
        });

        TweenMax.fromTo("#bar5", 1, {
            height: 5
        }, {
            height: 20,
            ease: Power2.easeOut
        });

    });

}


// SCREEN 3

function sectionThreeLoad() {

    //load box
    TweenMax.from("#frames", 2, {
        delay: 4,
        marginLeft: "260px"
    });

    //load piechart section
    //rigth to left
    TweenMax.from("#pieChart", 4, {
        opacity: 0,
        delay: 6,
        ease: Expo.easeOut
    });
}


// SCREEN 3

function sectionFourLoad() {

    //load 1st title
    TweenMax.from("#concepts", 0.5, {
        delay: 1,
        opacity: 0,
        marginLeft: "-155px"
    });


    stagger();





    //load "take a look..." and bunnies
    TweenMax.fromTo(".bunnyMagic", 1, {
        opacity: 0
    }, {
        delay: 14,
        opacity: 1
    });

    //load "ready to.." + rocket

    TweenMax.fromTo("#rocketLauncher p", 2, {
        y: 600
    },{
        delay: 16,
        y: 200
    });


    TweenMax.fromTo("#rocketLauncher .rocket", 5, {
        x: 0,
        rotation: 0,
        y: 107
    }, {
        delay: 19,
        y: -628,
        x: 200,
        rotation: 20
    });

    //rocket launch + load 2nd title
    TweenMax.from("#tools .sub_title", 0.5, {
        delay: 22,
        opacity: 0,
        x: 350
    });

    // ".closer:last-child"

    TweenMax.fromTo("#tools ul", 1, {
        x: 250
    }, {
        delay: 23,
        x: 0,
        ease: Circ.easeOut
    });
}

function stagger() {
    //load each ul with  delay
    var tl = new TimelineLite();


    tl.staggerFrom("#concept ul", 1, {
        delay: 2,
        x: -150
    }, 2);

    tl.staggerFrom("#conceptTwo ul", 1, {
        delay: 2,
        x: -350
    }, 2);


}