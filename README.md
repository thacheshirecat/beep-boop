Specs:
1. Turns 0 into "Beep!" (works)
  input: 0
  output: Beep!
2. Turns 1 into "Boop!" (works)
  input: 3
  output: Beep! Boop! 2 3
5. Turns numbers that are evenly divisible by 3 into "Error!" (works)
  input: 12
  output: Beep! Boop! 2 Error! 4 5 Error! 7 8 Error! 10 11 Error!
3. Turns numbers containing 0 into "Beep!"
  input: 11
  output: Beep! Boop! 2 Error! 4 5 Error! 7 8 Error! Beep! 11
4. Turns numbers containing 1 into "Boop!"(takes priority over 0)
  input: 11
  output: Beep! Boop! 2 Error! 4 5 Error! 7 8 Error! Boop! Boop!
