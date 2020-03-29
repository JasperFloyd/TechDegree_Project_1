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
  quote: 'Never underestimate your ability to waste your own potential.', 
  source: `Daniel Freeman`,
  tag: 'LIFE'
},

{
  quote: 'Do or do not, there is no try.', 
  source: 'Yoda', 
  citation: 'Star Wars: The Empire Strikes Back',
  year: 1980
},

{
  quote: 'Your own reason is the only oracle given you by heaven, and you are answerable for, not the rightness, but the uprightness of the decision.', 
  source:'Thomas Jefferson',
  tag: 'DIVINITY'
},

{
  quote: 'You got the gift, but it looks like youre waiting for something.', 
  source: 'The Oracle',
  citation: 'The Matrix',
  year: 1999
},

{
  quote: 'Illumination by the spirit is the endless end of every virtue.', 
  source: 'Symeon the New Theologian',
  tag: 'DIVINITY'
},

{
  quote: `Toto, I've got a feeling we're not in Kansas anymore`, 
  source: 'Dorothy Gale',
  citation: 'The Wizard of Oz',
  year: 1939
},

{
  quote: 'This above all, to thine own self be true.', 
  source:'Shakespeare', 
  tag: 'POETRY'
},

{
  quote: 'We aim above the mark to hit the mark.', 
  source:'Ralph Waldo Emerson',
  tag: 'POETRY'
},

{
  quote: 'On some nights I still believe that a car with the gas needle on empty can run fifty more miles if you have the right music very loud on the radio', 
  source: 'Hunter S. Thompson',
  tag: 'MUSIC'
},

{
  quote: 'There is no balance, all or nothing', 
  source:'David Choe',
  tag: 'ART'
}
];



//function generates a random number between zero and the length of quotes array above
function getRandomQuote(){ 
  let ranNum;
  ranNum = Math.floor(Math.random() * quotes.length);
  return quotes[ranNum];
}




//in CSS, rgb() defines color using a combination of red, green, and blue intensities between integers of 0-255
//first, we have to create a random intensity between 0-255 
function randomColor(){ 
   num = Math.floor(Math.random() * 255);
    return num
}
//once we've returned a random intensity to the randomColor() function we need to assign three color variables (red, green, and blue) intensities through the randomColor() function

function randomFinalColor (){
  let colorR = randomColor();
  let colorG = randomColor();
  let colorB = randomColor();
  //once red, green, and blue variables have been assigned an intensity we need to concatenate these values into the rgb combination 
  let mixColor = `rgb(${colorR},${colorG},${colorB})`;
  //which is then returned directly to the background-color value in CSS
  return document.body.style.setProperty('background-color', mixColor);
}


//var screenDisplay will later provide the string to print
/*  printQuote function subsumes the getRandomQuote function which provides a random array index which will then be run through a conditional statement to check for and concatenate any additional properties 
    the printQuote function also includes a random color provided by the randomFinalColor function
    we return the var screenDisplay in totality directly to the innerHTML of the id-quote-box 
*/  
var screenDisplay;
function printQuote() {
  let currentQuote = getRandomQuote();
  screenDisplay = `<p class="quote"> ${currentQuote['quote']}</p>
                    <p class="source"> ${currentQuote['source']}`;                  
                        if(currentQuote.citation){
                          screenDisplay += `<p class="movie">   ${currentQuote['citation']}</p>`;
                        }
                        if(currentQuote.year){
                        screenDisplay +=  `<p class="time">  ${currentQuote['year']}\n</p>`;
                        }
                        if(currentQuote.tag){
                        screenDisplay += `<p class="tag">${currentQuote['tag']}</p>`;
                        }
            screenDisplay += `</p>`; 
            randomFinalColor();
            return document.getElementById('quote-box').innerHTML = screenDisplay;
  }
  
// we use the setInterval() method to call the printQuote function at the specified interval of 15000 milliseconds, or ever 15 seconds
let timer = setInterval(printQuote,15000);


//here we add an .addEventListener to the id-'load-quote' which, upon "click" will call the printQuote function
document.getElementById('load-quote').addEventListener("click", printQuote, false);