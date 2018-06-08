
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
This web application takes in a number from the user via a form and then outputs a range of all numbers starting at 0 and ending at the inputted number, however it will output designated strings following a set of prioritized conditions for certain numbers in the range. The priorities are as follows: for a number that is evenly divisible by 3, output Error. For a number that contains a 1, output Boop! For a number that contains a 0, output Beep!
\**********/


/*************\
Specifications:
1. Turns 0 into "Beep!"
  input: 0
  output: ["Beep!"]

2. Turns 1 into "Boop!"
  input: 1
  output: ["Beep!"]

3. Turns numbers that are evenly divisible by 5 into "Here be the ocean!" (takes priority over evenly divisible by 3, numbers with 1 and numbers with 0)
  input: 5
  output: ["Here be the ocean!"]

4. Turns numbers that are evenly divisible by 3 into "Error!" (takes priority over 1 and 0)
  input: 12
  output: ["Error!"]

5. Turns numbers containing 1 into "Boop!"(takes priority over 0)
  input: 11
  output: ["Boop!"]

6. Turns numbers containing 0 into "Beep!"
  input: 101
  output: ["Beep!"]

7. If text is entered into the second form field, it instead turns numbers that are evenly divisible by 5 into "Here be " + the inputted text + "!".
 input: 5 / Alex
 output: ["Here be Alex!"]

\*************/

/********************************\
Copyright and License Information:
This code utilizes an MIT license
\********************************/
