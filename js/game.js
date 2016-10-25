var myScore = 0;
var rivalScore = 0;    
    
    
/*function for catching snith*/  
var caught = function() { 
 var s = 0;
 var snitch = "";
    while (s < 1) 
    {
snitch = prompt("The snitch is within reach! Do you catch it? Yes or No").toLowerCase();
        switch(snitch) {
            case 'yes':
                myScore = myScore +=150;
                s++;
                break;
            case 'no':
                rivalScore = rivalScore +=150;
                s++;
                break;
            default:
                s = 0;
        }
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

$("#refresh").click(function() {
    window.location.reload();
});
};
    
 /*set variables for students*/   
    function Student(name, spell, house) {
    this.name = name;
    this.spell = spell;
    this.house = house;    
    }
/*end of setting variables for students*/ 
    
    
    
/*function for interaction with other students*/  
var interact = function() { 
var stands = "";    
function Student(name, spell, house) {
    this.name = name;
    this.spell = spell;
    this.house = house;
}    
var c = 0;
 
while (c < 1) {
    var stands = prompt("You see a student eyeing you from the stands from which House? Gryffindor, Slytherin, Ravenclaw or Hufflepuff").toLowerCase();
    
    switch (stands) {
            
        case "gryffindor":
            stands = new Student("Hermione Granger", "Countercurse", "Gryffindor");
            c++;
            break;
        case "slytherin":
            stands = new Student("Draco Malfoy", "Curse", "Slytherin");
            c++;
            break;
        case "ravenclaw":
            stands = new Student("Luna Lovegood", "Charms", "Ravenclaw");
            c++;
            break;
        case "hufflepuff":
            stands = new Student("Justin Finch", "Tampered Bludger", "Hufflepuff");
            c++
            break;
        case "snitch":
            caught();
            c++;
            break;
        default:
            c = 0;
    }

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
    }
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