// generate a multiplication table
// get user input
const number = parseInt(prompt('Enter an integer: '));

//create the multiplication table
for(let i = 1; i <= 10; i++) 
{
    // multiply i with user number
    const result = i * number;
    // display the result
    console.log(`${number} * ${i} = ${result}`);
}