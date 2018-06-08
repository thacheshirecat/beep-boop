//
//Business Logic Functions
//

var createArray = function(input)
{
  var firstArray = [];
  for (index = input; index >= 0; index--)
  {
    if (input === 0)
    {
      firstArray.push(input.toString());
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

  }
  firstArray.reverse();
  return firstArray;
};

var createArraysArray = function(array)
{
  array.forEach(function(element)
  {
    element = element.split("");
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
    var results = createArraysArray(firstArray);
    results.forEach(function(result)
    {
      $("#results").append("<li>"+result+"</li>");
    })

  });




});
