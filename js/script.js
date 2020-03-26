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
{
  quote: `'Never underestimate your ability to waste your own potential.'`, 
  source: `Daniel Freeman`,
},

{
  quote: `'Do or do not, there is no try.'`, 
  source: 'Yoda', 
  citation: 'Star Wars: The Empire Strikes Back',
  time: 1466,
},

{
  quote: 'Your own reason is the only oracle given you by heaven, and you are answerable for, not the rightness, but the uprightness of the decision.', 
  source:'Thomas Jefferson'
},

{
  quote: 'You got the gift, but it looks like youre waiting for something.', 
  source: 'The Oracle',
  movie: 'The Matrix'
},

{
  quote: 'Illumination by the spirit is the endless end of every virtue.', 
  source: 'Symeon the New Theologian'
},

{
  quote: 'You learn a lot about someone when you share a meal together', 
  source: 'Anthony Bourdain'
},

{
  quote: `'This above all, to thine own self be true.'`, 
  source:'Shakespeare', 
  time: 487
},

{
  quote: 'We aim above the mark to hit the mark.', 
  source:'Ralph Waldo Emerson'
},

{
  quote: 'On some nights I still believe that a car with the gas needle on empty can run fifty more miles if you have the right music very loud on the radio', 
  source: 'Hunter S. Thompson'
},

{
  quote: 'There is no balance, all or nothing', 
  source:'David Choe',
}
];
console.log(quotes);


//this function will generate a random number between 0 and the length of the array
let getRandomQuote = () => { 
  let ranNum;
  ranNum = Math.ceil(Math.random() * quotes.length);
  
  return quotes[ranNum];
}

console.log(getRandomQuote());



let randomColor = () => Math.floor(Math.random() * 999);
let randomFinalColor = () => {
  let colorR = randomColor();
  let colorG = randomColor();
  let colorB = randomColor();
  let mixColor = `rgb(${colorR},${colorG},${colorB})`;
  return document.body.style.setProperty('background-color', mixColor);
}
/***
 * `printQuote` function
***/
var screenDisplay;
let printQuote = () => {
  let currentQuote = getRandomQuote();
    screenDisplay = `<p class="quote"> ${currentQuote.quote}</p>`
                     `<p class="source"> ${currentQuote.source}`;                  
            if(currentQuote.time){
              screenDisplay +=  `<span class="time"> ${currentQuote.time}</span>`;
              
              if(currentQuote.chapter){
                screenDisplay += `<span class="chapter"> ${currentQuote.chapter}</span>`;
              }
              if(currentQuote.movie){
                screenDisplay += `<span class="movie"> Movie:  ${currentQuote.movie}</p>`;
              }
            }
            screenDisplay += `</p>`; 
            randomFinalColor();
            return document.getElementById('quote-box').innerHTML = screenDisplay;
  }
  console.log(printQuote());

let timer = setInterval(printQuote,15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);