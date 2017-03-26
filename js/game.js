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

var myScore = 0;
var rivalScore = 0;    
    


var caughtForm = ('<form class="caught-options">' +
        '<fieldset class="caught-options">' +
            '<label for="caught-options">The snitch is within reach! Do you catch it?<br></label>' +
                '<input type="radio" name="options" id="yes" value="yes" required>' +
                    '<label for="yes">Yes<br></label>' +
                '<input type="radio" name="options" id="no" value="no">' +
                    '<label for="no">No<br></label>' +
            '<button type="submit" class="clickhere" id="caughtClick">Submit</button>' +   
        '</fieldset>' + 
    '</form>'); 
    
/*function for catching snith*/  
var caught = function() { 
 $('.game').html(caughtForm);   
 var snitch = "";

 $('#caughtClick').click(function(e) {
    e.preventDefault();
snitch = $('.caught-options input:checked').val();
    $('.game').html('');
        switch(snitch) {
            case 'yes':
               myScore +=150;
                break;
            case 'no':
                rivalScore +=150;
                break;
            default:
                break;
        }
/*end of function for catching snitch*/    
    
/*Final function for end of game*/
    
        if (myScore > rivalScore) {
        $(".win").show();
    }
    else {
        $(".loss").show();
    }
/*End of final game-end function*/

});

$("#refresh").click(function() {
    window.location.reload();
});
};

var standsForm = ('<form class="stands-form">' +
        '<fieldset class="stands-form">' +
            '<label for="stands-form">You see a student eyeing you from the stands from which House?<br></label>' +
                '<input type="radio" name="stands" id="gryffindor" value="gryffindor" required>' +
                    '<label for="gryffindor">Gryffindor<br></label>' +
                '<input type="radio" name="stands" id="slytherin" value="slytherin">' +
                    '<label for="slytherin">Slytherin<br></label>' +
                '<input type="radio" name="stands" id="ravenclaw" value="ravenclaw">' +
                    '<label for="ravenclaw">Ravenclaw<br></label>' +
                '<input type="radio" name="stands" id="hufflepuff" value="hufflepuff">' +
                    '<label for="hufflepuff">Hufflepuff<br></label>' +
            '<button type="submit" class="clickhere" id="standsClick">Submit</button>' +
        '</fieldset> ' +
    '</form>');
    
//  /*set variables for students*/   
//     function Student(name, spell, house) {
//     this.name = name;
//     this.spell = spell;
//     this.house = house;    
//     }
// /*end of setting variables for students*/ 
    
    
    
/*function for interaction with other students*/  
var interact = function() { 
$('.game').html(standsForm);
$('#standsClick').click(function(e) { 
e.preventDefault();   
var stands = "";    
function Student(name, spell, house) {
    this.name = name;
    this.spell = spell;
    this.house = house;
}    
    var stands = $('.stands-form input:checked').val();
    
    switch (stands) {
            
        case "gryffindor":
            stands = new Student("Hermione Granger", "Countercurse", "Gryffindor");
            break;
        case "slytherin":
            stands = new Student("Draco Malfoy", "Curse", "Slytherin");
            break;
        case "ravenclaw":
            stands = new Student("Luna Lovegood", "Charms", "Ravenclaw");
            break;
        case "hufflepuff":
            stands = new Student("Justin Finch", "Tampered Bludger", "Hufflepuff");
            break;
        default:
            break;
    }
    
if (stands !== "")
    {
    if (stands.house == "Gryffindor" || stands.house == "Ravenclaw")
        {
        alert("It's " + stands.name + ", with a " + stands.spell + ". Just what I'd expect from a " + stands.house + ". Meanwhile, your team has scored 10 points! Nice job.");
        myScore +=10;    
        }
    else {
          alert("It's " + stands.name + ", with a " + stands.spell + ". Just what I'd expect from a " + stands.house + ". Meanwhile, your opponent has scored 10 points with the quaffel! Be careful.");
        rivalScore +=10;
         }    
        $('.game').html(gameForm);
    }
});
};
    

/*bludger function*/

var bludger = function() {
var b = 0;
while (b < 1)
{
var bludgePrompt = prompt("Look out! A bludger is coming your way. Select dodge, graze, hit, redirect").toLowerCase();
switch (bludgePrompt) {

case "dodge":
alert("Way to dodge it! No Hospital Wing for you! Meanwhile, your team has scored 20 points!");
myScore +=20;
b++;
break;

case "graze":
alert("The bludger grazed your broomstick! That was scary. Even scarier is that the other team scored 10 points!");
rivalScore +=10;
b++;
break;

case "hit":
alert("You've been hit! Get back on track quickly. The other team has already scored 20 points!");
rivalScore +=20;
b++;
break;

case "redirect":
alert("Amazing! You've managed to redirect the bludger while your team scored 10 points!");
myScore += 10;
b++;
break;

default:
break;
}

};
/*End of bludger function*/    
    
    
};