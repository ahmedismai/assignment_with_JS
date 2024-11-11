var quotes = [{
    quote: "You miss 100% of the shots you don't take.",
    source: "--Wayne Gretzy",

},
{
    quote: "It's not what happens to you, but how you react to it that matters.",
    source: "--Epictetus",

},
{
    quote: "The best revenge is massive success.",
    source: "--Frank Sinatra",

},
{
    quote: "Do not take life too seriously. You will not get out alive.",
    source: "--Elbert Hubbard",

},
{
    quote: "Resentment is like drinking poison and waiting for your enemies to die.",
    source: "--Nelson Mandela",

}];
var counter=null;
function getRandomQuote() { 
  var quoteIndex = Math.floor(Math.random() * quotes.length); 

  if(counter===quoteIndex){
        getRandomQuote()
    }
    else{
        document.getElementById("quote").innerHTML=quotes[quoteIndex].quote;
        document.getElementById("source").innerHTML=quotes[quoteIndex].source;
    }
        counter=quoteIndex;
}









