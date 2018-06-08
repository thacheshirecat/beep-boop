var createFirstArray = function(input)
{
  var firstArray = [];
  for (index = input; index >= 0; input--)
  {

  }

  alert(firstArray);
  return firstArray;
}























//user interface logic

$(document).ready(function()
{
  $("#number-input").submit(function(event)
  {
    event.preventDefault();

    var userInput = parseInt($("#the-number").val());
    var result = createFirstArray(userInput);
    alert(result);

  })




})
