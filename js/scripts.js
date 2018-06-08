var createFirstArray = function(input)
{
  var firstArray = [];
  for (index = input; index > 0; index--)
  {
    firstArray.push(input);
    input = input - 1;
    console.log(firstArray);
  }
  alert(firstArray);
  return firstArray;
};























//user interface logic

$(document).ready(function()
{
  $("#number-input").submit(function(event)
  {
    event.preventDefault();

    var userInput = parseInt($("#the-number").val());
    alert(userInput - 1);
    var result = createFirstArray(userInput);
    alert(result);

  });




});
