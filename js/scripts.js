//
//Business Logic Functions
//

var createArray = function(input)
{
  var firstArray = [];
  for (index = input; index >= 0; index--)
  {
    firstArray.push(input.toString());
    input = input - 1;
  }
  firstArray.reverse();
  return firstArray;
};

var createArraysArray = function(array)
{
  array.forEach(function(element)
  {
    element = element.split("");
    alert(element);
  });
  alert(array);
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

    var userInput = parseInt($("#the-number").val());
    var firstArray = createArray(userInput);
    var result = createArraysArray(firstArray);
    alert(result);

  });




});
