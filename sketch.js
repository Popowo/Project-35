var button , greeting;

function setup(){
  
  var canvas = createCanvas(750,600);

  
  
  button = createButton ( "Yes" ) ;
  button . position ( 550 , 160 ) ;
  button . mouseClicked ( vote1 ) ;
  button = createButton ( "No" ) ;
  button . position ( 550 , 190 ) ;
  button . mouseClicked ( vote1 ) ;

  greeting = createElement ( "h3" ) ;
  greeting . html ( " 1) Do you like coding?" ) ;
  greeting . position ( 400 , 100 ) ;


  

  button = createButton( "Yes" ) ;
  button . position ( 550 , 300 ) ;
  button . mouseClicked ( vote2 ) ;
  button = createButton ( "No" ) ;
  button . position ( 550 , 330 ) ;
  button . mouseClicked ( vote2 ) ;
  button = createButton ( "I take it as a hobby" ) ;
  button . position ( 550 , 360 ) ;
  button . mouseClicked ( vote2 ) ;
  
  greeting = createElement ( "h3" ) ;
  greeting . html ( " 2) Do you want to be a pro coder when you grow up?" )  ;
  greeting . position ( 400 , 250 ) ;


  

  button = createButton ( "Yes" ) ;
  button . position ( 550 , 460 ) ;
  button . mouseClicked ( vote3 ) ;
  button = createButton ( "No" ) ;
  button . position ( 550 , 490 ) ;
  button . mouseClicked ( vote3 ) ;
  
  greeting = createElement ( "h3" ) ;
  greeting . html ( " 3) Have you spent countless hours playing a video game?" ) ;
  greeting . position ( 400 , 400 ) ;
  input = createInput ( "Name" ) ;
  input . position ( 650 , 50 ) ;
  
}


function draw () {
  background ( "lightblue" ) ;
}

 
function vote1(){
  greeting = createElement( "h2" ) ;
  greeting . html ( "Answered!" ) ;
  greeting . position ( 800 , 165 ) ;
}

function vote2 () {
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Answered!" ) ;
  greeting . position ( 800 , 320 ) ;
}

function vote3 () {
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Answered!" ) ;
  greeting . position ( 800 , 500 ) ;
  
  button = createButton ( "Submit" ) ;
  button . position ( 800 , 600 ) ;
  button . mouseClicked ( vote3 ) ;

  greeting = createElement ( "h2" ) ;
  greeting . html ( "Your votes have been submitted!!!  Thank You For Voting!!!" ) ;
  greeting . position ( 500 , 640 ) ;
}