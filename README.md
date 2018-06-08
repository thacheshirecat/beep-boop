Specs:
1. Turns 0 into "Beep!"
  input: 0
  output: Beep!
2. Turns 1 into "Boop!"
  input: 3
  output: Beep! Boop! 2 3
3. Turns numbers containing 0 into "Beep!"
  input: 11
  output: Beep! Boop! 2 3 4 5 6 7 8 9 Beep! 11
4. Turns numbers containing 1 into "Boop!"(takes priority over 0)
  input: 11
  output: Beep! Boop! 2 3 4 5 6 7 8 9 Boop! Boop!
5. Turns numbers that are evenly divisible by 3 into "Error!"
  input: 12
  output: Beep! Boop! 2 Error! 4 5 Error! 7 8 Error! Boop! Boop! Error!
