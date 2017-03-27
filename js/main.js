var state = {
    //main form for game options
    gameForm: ('<form class="game-options">' +
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
        '</form>'),
    //form used when 'student' is selected in game form
    standsForm: ('<form class="stands-form">' +
        '<fieldset class="stands-form">' +
            '<label for="stands-form">You see a student eyeing you in the stands from which house?<br></label>' +
                '<input type="radio" name="stands" id="gryffindor-student" value="gryffindor-student" required>' +
                    '<label for="gryffindor-student">Gryffindor<br></label>' +
                '<input type="radio" name="stands" id="slytherin-student" value="slytherin-student">' +
                    '<label for="slytherin-student">Slytherin<br></label>' +
                '<input type="radio" name="stands" id="ravenclaw-student" value="ravenclaw-student">' +
                    '<label for="ravenclaw-student">Ravenclaw<br></label>' +
                '<input type="radio" name="stands" id="hufflepuff-student" value="hufflepuff-student">' +
                    '<label for="hufflepuff-student">Hufflepuff<br></label>' +
            '<button type="submit" class="clickhere" id="standsClick">Submit</button>' +
        '</fieldset> ' +
        '</form>'),
    //form used when 'bludger' is selected in game form
    bludgerForm: ('<form class="bludger-form">' +
        '<fieldset class="bludger-form">' +
            '<label for="bludger-form">Look out! A bludger is coming your way.<br></label>' +
                '<input type="radio" name="bludger" id="dodge" value="dodge" required>' +
                    '<label for="dodge">Dodge<br></label>' +
                '<input type="radio" name="bludger" id="graze" value="graze">' +
                    '<label for="graze">Graze<br></label>' +
                '<input type="radio" name="bludger" id="hit" value="hit">' +
                    '<label for="hit">Hit<br></label>' +
                '<input type="radio" name="bludger" id="redirect" value="redirect">' +
                    '<label for="redirect">Redirect<br></label>' +
            '<button type="submit" class="clickhere" id="bludgerClick">Submit</button>' +
        '</fieldset> ' +
        '</form>'),
    //form used when 'snitch' is selected
    caughtForm: ('<form class="caught-options">' +
        '<fieldset class="caught-options">' +
            '<label for="caught-options">The snitch is within reach! Do you catch it?<br></label>' +
                '<input type="radio" name="options" id="yes" value="yes" required>' +
                    '<label for="yes">Yes<br></label>' +
                '<input type="radio" name="options" id="no" value="no">' +
                    '<label for="no">No<br></label>' +
            '<button type="submit" class="clickhere" id="caughtClick">Submit</button>' +   
        '</fieldset>' + 
        '</form>'),
    myScore: 0,
    rivalScore: 0
}
//variables that need to be global
var house;

//function to show sorting form
function displaySortingForm() {
    $("#sorted").click(function () {
    $(".header").hide();
    $(".sorting").show();
    }); 
    }

//function to get user's prefered Hogwarts House
function generateHouse() {
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
        });
    } 

//function to generate opponent for game
function generateOpponent() {
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
         //checks to ensure that opponent isn't
         //same as user's House   
        if (opponent !== house) {
            x++;
        }
        }
    $(".opponent").append(opponent); 
    /*End calculation*/  
    }

function displayFlyingLesson() {
    $("#flyClick").click(function() {
        $(".welcome").hide();
        $(".flying").show();
        }); 
    }

//function that displays opponent before game
function displayOpponent() {
    $("#ready").click(function() {
        $(".flying").hide();
        $(".match").show();
        }); 
    }

//function that starts the game
function startGame() {
    $("#start").click(function() {
        $(".match").hide();
        $('.game').html(state.gameForm); 
        });
    }

/*function for interaction with other students*/  
function interact() { 
    $('.game').html(state.standsForm);
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
                console.log(stands);
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

    if (stands.house == "Gryffindor" || stands.house == "Ravenclaw")
        {
        alert("It's " + stands.name + ", with a " + stands.spell + ". Just what I'd expect from a " + stands.house + ". Meanwhile, your team has scored 10 points! Nice job.");
        state.myScore +=10;    
        }
    else {
          alert("It's " + stands.name + ", with a " + stands.spell + ". Just what I'd expect from a " + stands.house + ". Meanwhile, your opponent has scored 10 points with the quaffel! Be careful.");
        state.rivalScore +=10;
         }    
        $('.game').html(state.gameForm);
        });
    };

/*bludger function*/
function bludger() {
    $('.game').html(state.bludgerForm);
    $('#bludgerClick').on('click', function(e) {
        e.preventDefault();
        var bludgerSelection = $('.bludger-form input:checked').val();
        switch (bludgerSelection) {

            case "dodge":
                alert("Way to dodge it! No Hospital Wing for you! Meanwhile, your team has scored 20 points!");
                state.myScore +=20;
                break;

            case "graze":
                alert("The bludger grazed your broomstick! That was scary. Even scarier is that the other team scored 10 points!");
                state.rivalScore +=10;
                break;

            case "hit":
                alert("You've been hit! Get back on track quickly. The other team has already scored 20 points!");
                state.rivalScore +=20;
                break;

            case "redirect":
                alert("Amazing! You've managed to redirect the bludger while your team scored 10 points!");
                state.myScore += 10;
                break;

            default:
                break;
            }

        $('.game').html(state.gameForm);
        });   
    };

//main form displaying game options
function gameOptions() {
    $('.game').on('submit', '.game-options', function(e) {
        e.preventDefault();    
        var gameChoice = $('.game-options input:checked').val();
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
                    break;
                default:
                   break;
                }
        });  
    }

/*function for catching snith*/  
function caught() { 
    $('.game').html(state.caughtForm);   
    var snitch = "";
    $('#caughtClick').click(function(e) {
        e.preventDefault();
        snitch = $('.caught-options input:checked').val();
        $('.game').html('');
        switch(snitch) {
            case 'yes':
               state.myScore +=150;
                break;
            case 'no':
                state.rivalScore +=150;
                break;
            default:
                break;
            }
        displayResults();      
        });
    };    

function displayResults() {
    if (state.myScore > state.rivalScore) {
        $(".win").show();
        }
    else {
        $(".loss").show();
        }
    }

function refresh() {
    $("#refresh").click(function() {
        window.location.reload();
        });
    }        

$(document).ready(function() {
    displaySortingForm();
    generateHouse();
    generateOpponent();
    displayFlyingLesson();
    displayOpponent();
    startGame();
    gameOptions();
    refresh();
});