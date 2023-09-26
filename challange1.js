// Challange1: Student Grade Generator
// Instructions: run 'node challange1.js' on your terminal
// Use the readline module to take user prompts.
const readline = require('readline').createInterface({
    // Fun note:
    // readline.createInterface(input, output, completer)
    // completer function is used for autocompletion... interesting
    input: process.stdin,
    output: process.stdout
});

// prompt student for marks
// run function that generates Grades from inputs
readline.question('What is your mark?  ', (marks) => {
    console.log('Your generated grade is ');
    generateGrade(marks);
    readline.close();
});

// when tty is closed, run exit script, say goodbye
readline.on('close', ()=> {
    console.log('Marks to Grade. Bye');
    process.exit();
})


//function to generate grades from marks inputs
function generateGrade(marks) {
    if (isNaN(marks) || marks < 0 || marks > 100) { // condition statement(using logical operators)
        console.log('Please enter a valid grade\n numbered between 0 and 100');
    } else {
        if (marks > 79) {
            console.log("A");
        } else if (marks >= 60 && marks <= 79) {
            console.log("B");
        } else if (marks >= 50 && marks <= 59) {
            console.log("C");
        } else if (marks >= 40 && marks <= 49) {
            console.log("D");
        } else {
            console.log("E");
        }
    }
}