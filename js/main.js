$(document).ready(function() {
    
    
$("#sorted").click(function () {
    $(".header").hide();
    $(".howto").hide();
    $(".sorting").show();
}); 
    
$(".howto").click(function () {
    $(".howto").hide();
    $(".hide").show();
    $(".instruct").show();
});

$(".hide").click(function () {
    $(".hide").hide();
    $(".instruct").hide();
    $(".howto").show();
});    
    
/*Sorting*/
$("#sortClick").click(function () { 
$(".sorting").hide(); 
var houseCase = "";
var i = 0;    
while (i < 1) {    
var house = prompt("Where will you be sorted? Select Gryffindor, Ravenclaw, Hufflepuff, or Slytherin.");
    houseCase = house === null ? null : house.toLowerCase();

    switch(houseCase) {
        case 'gryffindor': 
            $("head").append("<link rel='stylesheet' type='text/css' href='css/gryffindor.css'>");
            i++;
            break;
        case 'slytherin':
            $("head").append("<link rel='stylesheet' type='text/css' href='css/slytherin.css'>");
            i++;
            break;
        case 'hufflepuff':
            $("head").append("<link rel='stylesheet' type='text/css' href='css/hufflepuff.css'>");
            i++;
            break;
        case 'ravenclaw':
            $("head").append("<link rel='stylesheet' type='text/css' href='css/ravenclaw.css'>");
            i++;
            break;
        case null:
            break;
        default:
            i = 0;
    }
}  
    
/*calculate opponent for 'big game'*/
 var r = Math.random();
var opponent = " ";    
 var x = 0;
while (x < 1) {
    if (r >= 0 && r <= 0.24) {
      opponent = "gryffindor";  
    }
    else if (r >= 0.25 && r <= 0.49) {
        opponent = "slytherin";
    }
    else if (r >= 0.5 && r <= 0.74) {
        opponent = "hufflepuff";
    }
    else {
        opponent = "ravenclaw";
    }
    if (opponent != houseCase) {
        x++;
    }
    }
$(".opponent").append(opponent); 
/*End calculation*/    

    
$(".welcome").show();   
});    
    
/*Flying Lesson*/
$("#flyClick").click(function() {
 $(".welcome").hide();
    $(".flying").show();
}); 
    

    
$("#ready").click(function() {
    $(".flying").hide();
    $(".match").show();
}); 
    
$("#start").click(function() {
    $(".match").hide(); 
    
var g = 0;
    while (g < 1)
        {
            var gameChoice = prompt("What do you see? Student, Bludger, or Snitch").toLowerCase();
            
            switch (gameChoice)
                {
                    case "student":
                        interact();
                        break;
                    case "bludger":
                        bludger();
                        break;
                    case "snitch":
                        caught();
                        g++;
                        break;
                    default:
                        g = 0;
                }
        }
});
});