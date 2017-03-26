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

var gameForm = ('<form class="game-options">' +
        '<fieldset class="game-options">' +
            '<label for="game-options">What do you see? <br></label>' +
                '<input type="radio" name="options" id="student" value="student" required>' +
                    '<label for="student">Student<br></label>' +
                '<input type="radio" name="options" id="bludger" value="bludger">' +
                    '<label for="bludger">Bludger<br></label>' +
                '<input type="radio" name="options" id="snitch" value="snitch">' +
                    '<label for="snitch">Snitch<br></label>' +
            '<button type="submit" class="clickhere" id="gameClick">Submit</button>' +   
        '</fieldset>' + 
    '</form>'); 
    
$("#start").click(function() {
    $(".match").hide();
    $('.game').append(gameForm); 
   

$('#gameClick').click(function(e) {
e.preventDefault();    
var g = 0;
    while (g < 1)
        {
            var gameChoice = $('.game-options input:checked').val();
            console.log(gameChoice);
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
});