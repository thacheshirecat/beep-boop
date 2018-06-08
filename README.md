
/**********\
Author Name:
Alex Bunnell
\**********/


/***********\
Program Name:
Beep Boop!
\***********/


/*****************\
Setup Instructions:

    1. Clone the repository from https://github.com/thacheshirecat/beep-boop
    2. navigate to the beep-boop folder
    3. Open index.html,
    4. Enter a number in the text field and click "Submit!"

Or visit the page online at: https://thacheshirecat.github.io/beep-boop/
\*****************/


/**********\
Description:
This web application takes in a number from the user via a form and then outputs a range of all numbers starting at 0 and ending at the inputted number, however it will output designated strings following a set of prioritized conditions for certain numbers in the range. The priorties are as follows: for a number that is evenly divisible by 3, output Error. For a number that contains a 1, output Boop! For a number that contains a 0, output Beep!
\**********/


/*************\
Specifications:
1. Turns 0 into "Beep!"
  input: 0
  output: Beep!

2. Turns 1 into "Boop!"
  input: 3
  output: Beep! Boop! 2 3

3. Turns numbers that are evenly divisible by 3 into "Error!" (takes priority over 1 and 0)
  input: 12
  output: Beep! Boop! 2 Error! 4 5 Error! 7 8 Error! 10 11 Error!

4. Turns numbers containing 1 into "Boop!"(takes priority over 0)
  input: 11
  output: Beep! Boop! 2 Error! 4 5 Error! 7 8 Error! Boop! Boop!

5. Turns numbers containing 0 into "Beep!"
  input: 11
  output: Beep! Boop! 2 Error! 4 5 Error! 7 8 Error! Beep! 11
\*************/

/********************************\
Copyright and License Information:
This code utilizes an MIT license
\********************************/
