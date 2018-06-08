//
//Business Logic Functions
//

//Turns inputted numbers into an array, replacing 0 with Beep! and any number evenly divisible by 3 with Error.
var createArray = function(input)
{
  var firstArray = [];
  for (index = input; index >= 0; index--)
  {
    if (input === 0)
    {
      firstArray.push("Beep!");
      input = input - 1;
    }
    else if (input === 1)
    {
      firstArray.push("Boop!");
      input = input - 1;
    }
    else if (input%3 === 0)
    {
      firstArray.push("Error.");
      input = input - 1;
    }
    else
    {
      firstArray.push(input.toString());
      input = input - 1;
    }
  };
  firstArray.reverse();
  return firstArray;
};

//Turns elements on an array into their own array
var createArraysArray = function(array)
{
  array.forEach(function(element)
  {
    element = element.split("");
  });
  return array;
};


var arrayReplacer = function(array)
{
  for (index = 10; index <>= ; index??)
  {
    
  }
  return array;
};



















//
//Front End Functions
//

$(document).ready(function()
{
  $("#number-input").submit(function(event)
  {
    event.preventDefault();
    $("#results").text("");

    var userInput = parseInt($("#the-number").val());
    var firstArray = createArray(userInput);
    var arraysArray = createArraysArray(firstArray);
    var results = arrayReplacer(arraysArray);

    results.forEach(function(result)
    {
      $("#results").append("<li>"+result+"</li>");
    });

  });




});
