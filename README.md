Specs:
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
