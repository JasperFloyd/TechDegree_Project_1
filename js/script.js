/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
{quote: 'Never underestimate your ability to waste your own potential.', source: 'Daniel Freeman'},
{quote: 'Do or do not, there is no try.', source: 'Yoda'},
{quote: 'Your own reason is the only oracle given you by heaven, and you are answerable for, not the rightness, but the uprightness of the decision.', source:'Thomas Jefferson'},
{quote: 'You got the gift, but it looks like youre waiting for something.', source: 'The Matrix The Oracle'},
{quote: 'Illumination by the spirit is the endless end of every virtue.', source: 'Symeon the New Theologian'},
{quote: 'You learn a lot about someone when you share a meal together', source: 'Anthony Bourdain'},
{quote: 'This above all, to thine own self be true.', source: 'Shakespeare'},
{quote: 'We aim above the mark to hit the mark.', source: 'Ralph Waldo Emerson'},
{quote: 'On some nights I still believe that a car with the gas needle on empty can run fifty more miles if you have the right music very loud on the radio', source: 'Hunter S. Thompson'},
{quote: 'There is no balance, all or nothing', source: 'David Choe'},
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(array){
  let quoteIndex = Math.ceil(Math.random() * array.length);
  let ranQuote =array[quoteIndex];
  return rantQuote;
  console.log(ranQuote);
};


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);