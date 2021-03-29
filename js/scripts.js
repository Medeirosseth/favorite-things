


$(document).ready(function() {
  let favorite = [];
  let user1 = [];
  console.log(favorite)
  $(".formOne").submit(function(event) {
    event.preventDefault();
    const icecream = $("input#icecream").val();
    const food = $("input#food").val();
    const color = $("input#color").val();
 
    console.log(food)
    favorite = [icecream, food, color];
    
    user1.push(favorite [0], favorite[1])//inefficient solution

    //alert(favorite);//testing favorite value within scope
    //alert(user1);

    const result= icecream + ", " + food + ", " + color;
    $("#result").text(result);
    
    $("ul").append('<li>'+user1[0]+'</li>');
    $("ul").append('<li>'+user1[1]+'</li>'); 
    
    
    //$("button#submit").click(function() {
   
     // $("ul").append('<li>'+user1[0]+'</li>');
     // $("ul").append('<li>'+user1[1]+'</li>'); 
   // });  

  })  
})

//$('#content ul').append(
  //$('<li>').append(
    //  $('<a>').attr('href','/user/messages').append(
      //    $('<span>').attr('class', 'tab').append("Message center")


        //  $("ul").append(
          //  $('<li>').append(
            ////  $(user1).append(
                //$('<li>')
                
             // )
           // )     