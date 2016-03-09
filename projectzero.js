/*winning combinations rows ([1,2,3],[3,2,1],[4,5,6],[6,5,4],[7,8,9],[9,8,7]) - rows
winning combinations col  ([1,4,7].[7,4,1],[2,5,8],[8,5,2],[3,6,9],[9,6,3]) - col
winning combinations dia  ([1,5,9],[9,5,1],[3,5,7],[7,5,3]) - dia*/

$(document).ready(function(){
var winBlue = 0;
var winRed = 0;
var move;
var player1 = "";
var player2 = "";
var turn = 0;
var grid = [[0,0,0],[0,0,0],[0,0,0]];
var hasWinner = 0, moveCount = 0;


$(".newGame").on("click", function(){
  $(".box").removeClass("disable blue red").fadeOut(1000).fadeIn(1000);
});

  $("#one").on("click", function(){
    if($("#one").hasClass("disable")){
      alert("you cannot place your move here");
    }
    else{
    $("#one").addClass("disable");
    if(turn%2===0){
    //  $("#one").css("backgroundColor", "blue");

      $("#one").addClass("blue");
  }
  else{
    $("#one").addClass("red");
  }
turn ++
}
check();
});

$("#two").on("click", function(){
  if($("#two").hasClass("disable")){
    alert("you cannot place your move here");
  }
  else{
  $("#two").addClass("disable");
  if(turn%2===0){
  //  $("#one").css("backgroundColor", "blue");

    $("#two").addClass("blue");
}
else{
  $("#two").addClass("red");
}
turn ++
}
check();
});

$("#three").on("click", function(){
  if($("#three").hasClass("disable")){
    alert("you cannot place your move here");
  }
  else{
  $("#three").addClass("disable");
  if(turn%2===0){
  //  $("#one").css("backgroundColor", "blue");

    $("#three").addClass("blue");
}
else{
  $("#three").addClass("red");
}
turn ++
}
check();
});

$("#four").on("click", function(){
  if($("#four").hasClass("disable")){
    alert("you cannot place your move here");
  }
  else{
  $("#four").addClass("disable");
  if(turn%2===0){
  //  $("#one").css("backgroundColor", "blue");

    $("#four").addClass("blue");
}
else{
  $("#four").addClass("red");
}
turn ++
}
check();
});

$("#five").on("click", function(){
  if($("#five").hasClass("disable")){
    alert("you cannot place your move here");
  }
  else{
  $("#one").addClass("disable");
  if(turn%2===0){
  //  $("#one").css("backgroundColor", "blue");

    $("#five").addClass("blue");
}
else{
  $("#five").addClass("red");
}
turn ++
}
check();
});

$("#six").on("click", function(){
  if($("#six").hasClass("disable")){
    alert("you cannot place your move here");
  }
  else{
  $("#six").addClass("disable");
  if(turn%2===0){
  //  $("#one").css("backgroundColor", "blue");

    $("#six").addClass("blue");
}
else{
  $("#six").addClass("red");
}
turn ++
}
check();
});

$("#seven").on("click", function(){
  if($("#seven").hasClass("disable")){
    alert("you cannot place your move here");
  }
  else{
  $("#seven").addClass("disable");
  if(turn%2===0){
  //  $("#one").css("backgroundColor", "blue");

    $("#seven").addClass("blue");
}
else{
  $("#seven").addClass("red");
}
turn ++
}
check();
});

$("#eight").on("click", function(){
  if($("#eight").hasClass("disable")){
    alert("you cannot place your move here");
  }
  else{
  $("#eight").addClass("disable");
  if(turn%2===0){
  //  $("#one").css("backgroundColor", "blue");

    $("#eight").addClass("blue");
}
else{
  $("#eight").addClass("red");
}
turn ++
}
check();
});

$("#nine").on("click", function(){
  if($("#nine").hasClass("disable")){
    alert("you cannot place your move here");
  }
  else{
  $("#nine").addClass("disable");
  if(turn%2===0){
  //  $("#one").css("backgroundColor", "blue");

    $("#nine").addClass("blue");
}
else{
  $("#nine").addClass("red");
}
turn ++
}
check();
});
//console.log($("#one").hasClass("blue"));
});

var check=function(){
  if($("#one").hasClass("blue") && $("#two").hasClass("blue") && $("#three").hasClass("blue") ||
     $("#four").hasClass("blue") && $("#five").hasClass("blue") && $("#six").hasClass("blue") ||
     $("#seven").hasClass("blue") && $("#eight").hasClass("blue") && $("#nine").hasClass("blue") ||
     $("#one").hasClass("blue") && $("#four").hasClass("blue") && $("#seven").hasClass("blue") ||
     $("#two").hasClass("blue") && $("#five").hasClass("blue") && $("#eight").hasClass("blue") ||
     $("#three").hasClass("blue") && $("#six").hasClass("blue") && $("#nine").hasClass("blue") ||
     $("#one").hasClass("blue") && $("#five").hasClass("blue") && $("#nine").hasClass("blue") ||
     $("#three").hasClass("blue") && $("#five").hasClass("blue") && $("#seven").hasClass("blue")){
       alert("BLUE player one wins !!");
     }
     else if($("#one").hasClass("red") && $("#two").hasClass("red") && $("#three").hasClass("red") ||
        $("#four").hasClass("red") && $("#five").hasClass("red") && $("#six").hasClass("red") ||
        $("#seven").hasClass("red") && $("#eight").hasClass("red") && $("#nine").hasClass("red") ||
        $("#one").hasClass("red") && $("#four").hasClass("red") && $("#seven").hasClass("red") ||
        $("#two").hasClass("red") && $("#five").hasClass("red") && $("#eight").hasClass("red") ||
        $("#three").hasClass("red") && $("#six").hasClass("red") && $("#nine").hasClass("red") ||
        $("#one").hasClass("red") && $("#five").hasClass("red") && $("#nine").hasClass("red") ||
        $("#three").hasClass("red") && $("#five").hasClass("red") && $("#seven").hasClass("red")){
          alert("RED player one wins !!");
        }
        else if(turn === 9){
          alert("It's a tie !");
        }



};
