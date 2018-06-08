//
//Business Logic Functions
//

//Turns inputted numbers into an array, replacing the number 0 with Beep!, the number 1 with Boop!, any number evenly divisible by 3 with Error. or any number evenly divisible by 5 into Here be the ocean! (substitutes user input for "ocean" if there is any in the second field)
var createArray = function(input)
{

  var userName = $("#the-name").val();
  if (userName === "")
  {
    userName = "the ocean";
  }

  var firstArray = [];
  for (index = input; index >= 0; index--)
  {
    if (input === 0)
    {
      firstArray.push("Beep!");
      input = input - 1;
    }
    else if (input%5 === 0)
    {
      firstArray.push("Here be " + userName + "!");
      input = input - 1;
    }
    else if (input%3 === 0)
    {
      firstArray.push("Error!");
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
  //Function for when the user submits the form or clicks the Count Up button
  $("#number-input").submit(function(event)
  {
    event.preventDefault();
    $("#results").text("");
    $("#results-check").text("");
    $("#results-check").hide();
    $("#results-buttons").show();
    $(".results-column").show();
    $("#results").show();

    var userInput = parseInt($("#the-number").val());
    var firstArray = createArray(userInput);
    var arraysArray = createArraysArray(firstArray);
    var preResults = oneScanner(arraysArray);
    var results = zeroScanner(preResults);
    var resultsCheck = 0;

    results.forEach(function(result)
    {
      $("#results-check").append("<li>"+result+"---> "+resultsCheck+"</li>");
      $("#results").append("<li>"+result+"</li>");
      resultsCheck = resultsCheck + 1;
    });

  });

  //Function for when the user clicks the Count Down button on the page
  $("#results-reverse-button").click(function(event)
  {
    event.preventDefault();
    $("#results").text("");
    $("#results-check").text("");
    $("#results-check").hide();
    $("#results-buttons").show();
    $(".results-column").show();
    $("#results").show();


    var userInput = parseInt($("#the-number").val());
    var firstArray = createArray(userInput);
    var arraysArray = createArraysArray(firstArray);
    var preResults = oneScanner(arraysArray);
    var results = zeroScanner(preResults);
    var resultsCheck = results.length - 1;

    results.reverse();
    results.forEach(function(result)
    {
      $("#results-check").append("<li>"+result+"---> "+resultsCheck+"</li>");
      $("#results").append("<li>"+result+"</li>");
      resultsCheck = resultsCheck - 1;
    });

  });

  //Function for clicking the button to verify the results against the numbers in the range
  $("#results-check-button").click(function()
  {
    $("#results").toggle();
    $("#results-check").toggle();
  });

  //Function for hiding the results by clicking the word "Cool" at the bottom of the page
  $("#close-results").click(function()
  {
    $("#results-buttons").hide();
    $(".results-column").hide();
  });

});
