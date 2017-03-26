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
$("#sortClick").click(function (e) { 
    e.preventDefault();    
    $(".sorting").hide();       
    var house = $('.sorting-form input:checked').val();

    switch(house) {
        case 'gryffindor': 
            $("head").append("<link rel='stylesheet' type='text/css' href='css/gryffindor.css'>");
            break;
        case 'slytherin':
            $("head").append("<link rel='stylesheet' type='text/css' href='css/slytherin.css'>");
            break;
        case 'hufflepuff':
            $("head").append("<link rel='stylesheet' type='text/css' href='css/hufflepuff.css'>");
            break;
        case 'ravenclaw':
            $("head").append("<link rel='stylesheet' type='text/css' href='css/ravenclaw.css'>");
            break;
        default:
            break;
    }  

    $(".welcome").show(); 
    
/*calculate opponent for 'big game'*/
var opponent = " ";    
 var x = 0;
while (x < 1) {
     var r = Math.random();
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
    console.log(opponent);
    if (opponent !== house) {
        x++;
    }
    }
$(".opponent").append(opponent); 
/*End calculation*/      
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
    $('.game').html(gameForm); 
   

$('.game-options').submit(function(e) {
e.preventDefault();    
var g = 0;
    while (g < 1)
        {
            var gameChoice = $('.game-options input:checked').val();
            switch (gameChoice)
                {
                    case "student":
                        interact();
                        g++;
                        break;
                    case "bludger":
                        bludger();
                        g++;
                        break;
                    case "snitch":
                        caught();
                        g++;
                        break;
                    default:
                       break;
                }
        }
      });  
});
});