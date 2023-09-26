# Code challenge: Toy problem

Phase 1 code challenge. Toy problem

## Challenge 1: Student Grade Generator (Toy Problem)

- Write a function that prompts the user to input student marks.
- The input should be between 0 and 100.
- The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

**Setup:**
run challenge 1
`node challenge1.js`

## Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

        For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

**Setup:**
used prompt-sync, a js module to get user prompts from the terminal
`npm install prompt-sync`
run challenge 2
`node challenge2.js`

## Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

**Setup:**
`node challenge3.js`

## BubbleSort

Bubble Sort repeatedly steps through the list,
compares adjacent elements, and swaps them if they are in the wrong order.
The pass through the list is repeated until no swaps are needed,
which means the list is sorted!

**Setup**
`node bubble.js`
