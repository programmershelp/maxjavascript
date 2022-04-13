// string comparison
const string1 = 'maxJavascript Programs';
const string2 = 'maxjavascript programs';

// create regex
const pattern = new RegExp(string1, "gi");

// compare the stings
const result = pattern.test(string2)

if(result) 
{
    console.log('The strings are similar.');
} 
else 
{
    console.log('The strings are not similar.');
}