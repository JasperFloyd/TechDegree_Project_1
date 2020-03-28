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
  tag: 'HUMOR'
},

{
  quote: 'Do or do not, there is no try.', 
  source: 'Yoda', 
  movie: 'Star Wars: The Empire Strikes Back',
  year: 1980
},

{
  quote: 'Your own reason is the only oracle given you by heaven, and you are answerable for, not the rightness, but the uprightness of the decision.', 
  source:'Thomas Jefferson',
  tag: 'ILLUMINATION'
},

{
  quote: 'You got the gift, but it looks like youre waiting for something.', 
  source: 'The Oracle',
  movie: 'The Matrix',
  year: 1999
},

{
  quote: 'Illumination by the spirit is the endless end of every virtue.', 
  source: 'Symeon the New Theologian',
  tag: 'ILLUMINATION'
},

{
  quote: `Toto, I've got a feeling we're not in Kansas anymore`, 
  source: 'Dorothy Gale',
  movie: 'The Wizard of Oz',
  year: 1939
},

{
  quote: 'This above all, to thine own self be true.', 
  source:'Shakespeare', 
  tag: 'OPTIMIZE'
},

{
  quote: 'We aim above the mark to hit the mark.', 
  source:'Ralph Waldo Emerson',
  tag: 'OPTIMIZE'
},

{
  quote: 'On some nights I still believe that a car with the gas needle on empty can run fifty more miles if you have the right music very loud on the radio', 
  source: 'Hunter S. Thompson',
  tag: 'MOTIVATION'
},

{
  quote: 'There is no balance, all or nothing', 
  source:'David Choe',
  tag: 'TRUTH'
}
];
console.log(quotes);



function getRandomQuote(){ 
  let ranNum;
  ranNum = Math.floor(Math.random() * quotes.length);
  return quotes[ranNum];
}

console.log(getRandomQuote());



function randomColor(){ 
   num = Math.floor(Math.random() * 200);
    return num
}
function randomFinalColor (){
  let colorR = randomColor();
  let colorG = randomColor();
  let colorB = randomColor();
  let mixColor = `rgb(${colorR},${colorG},${colorB})`;
  return document.body.style.setProperty('background-color', mixColor);
}



var screenDisplay;
function printQuote() {
  let currentQuote = getRandomQuote();
  screenDisplay = `<p class="quote"> ${currentQuote['quote']}</p>
                    <p class="source"> ${currentQuote['source']}`;                  
                        if(currentQuote.movie){
                          screenDisplay += `<p class="movie">   ${currentQuote['movie']}</p>`;
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
  

let timer = setInterval(printQuote,15000);



document.getElementById('load-quote').addEventListener("click", printQuote, false);