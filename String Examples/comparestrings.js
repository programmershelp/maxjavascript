// string comparison
const string1 = 'maxJavascript Programs';
const string2 = 'maxjavascript programs';

// compare both strings
const result = string1.toLowerCase() === string2.toLowerCase();

if(result) 
{
    console.log('The strings are similar.');
} 
else 
{
    console.log('The strings are not similar.');
}