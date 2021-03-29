let favorite = [];
let user1 = [];
$(document).ready(function() {
  
  console.log(favorite)
  $(".formOne").submit(function(event) {
    event.preventDefault();
    const icecream = $("input#icecream").val();
    const food = $("input#food").val();
    const color = $("input#color").val();
    console.log(food)
    favorite = [icecream, food, color];
    //user1= favorite.push(user1)// adds 4 to favorite
    user1= user1.push(favorite)//returns 1 in alert

    alert(favorite);//testing favorite value within scope
    alert(user1);


    const result= icecream + ", " + food + ", " + color;
    $("#result").text(result);
    
    
    //const favorite = ()
    //favorite.push(icecream)
  
  }); 
 
  
})