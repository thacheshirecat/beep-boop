//
//Business Logic Functions
//

//Turns inputted numbers into an array, replacing the number 0 with Beep!, the number 1 with Boop! and any number evenly divisible by 3 with Error.
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

//Scans array for 1s in numbers and replaces those numbers with Boop!
var oneScanner = function(array)
{
  array.forEach(function(element)
  {
    for (index = 0; index < element.length; index++)
    {
      if (element[index] === "1")
      {
        array[element] = "Boop!";
      }
    };
  });
  return array;
};

//Scans array for 0s in numbers and replaces those numbers with Boop!
var zeroScanner = function(array)
{
  array.forEach(function(element)
  {
    for (index = 0; index < element.length; index++)
    {
      if (element[index] === "0")
      {
        array[element] = "Beep!";
      }
    };
  });
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
    var preResults = oneScanner(arraysArray);
    var results = zeroScanner(preResults);


    var test = 0;
    results.forEach(function(result)
    {
      $("#results").append("<li>"+result+"---> "+test+"</li>");
      test = test + 1;
    });

  });




});
