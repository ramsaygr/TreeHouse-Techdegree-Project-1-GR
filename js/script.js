//Treehouse FSJS Techdegree: project 1 - A Random Quote Generator


//Random Quotes Available for Publishing
const quotes = [
{	Quote:  `"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."	`	,	Author:	`	Patrick McKenzie	`	,	Category:	`	Computer	`	}	,  
{	Quote:	`"Anger is the feeling that makes your mouth work faster than your mind."	`	,	Author:	`	Evan Esar	`	,	Category:	`	Random	`	}	,
{	Quote:	`"Ask yourself: Have you been kind today? Make kindness your daily modus operandi and change your world."	`	,	Author:	`	Annie Lennox	`	,	Category:	`	Kindness	`	}	,
{	Quote:	`"At a dinner party one should eat wisely but not too well, and talk well but not too wisely."	`	,	Author:	`	W. Somerset Maugham	`	,	Category:	`	Random	`	}	,
{	Quote:	`"Every sweet has its sour; every evil its good."	`	,	Author:	`	Ralph Waldo Emerson	`	,	Category:	`	Evil	`	}	,
{	Quote:	`"How can I believe in God when just last week I got my tongue caught in the roller of an electric typewriter?"	`	,	Author:	`	Woody Allen	`	,	Category:	`	Random	`	}	,
{	Quote:	`"I am not in this world to live up to other people's expectations, nor do I feel that the world must live up to mine."	`	,	Author:	`	Fritz Perls	`	,	Category:	`	Life	`	}	,
{	Quote:	`"I don't have a photograph, but you can have my footprints. They're upstairs in my socks."	`	,	Author:	`	Groucho Marx	`	,	Category:	`	Random	`	}	,
{	Quote:	`"I have no pretensions whatever to that kind of elegance which consists in tormenting a respectable man."	`	,	Author:	`	Jane Austen	`	,	Category:	`	Novels	`	}	,
{	Quote:	`"I must create a system, or be enslaved by another man's."	`	,	Author:	`	William Blake	`	,	Category:	`	Random	`	}	,
{	Quote:	`"In the fight between you and the world, back the world."	`	,	Author:	`	Frank Zappa	`	,	Category:	`	The World	`	}	,
{	Quote:	`"It's not true that life is one damn thing after another; it is one damn thing over and over."	`	,	Author:	`	Edna St. Vincent Millay	`	,	Category:	`	Life	`	}	,
{	Quote:	`"People are always blaming their circumstances for what they are. I don't believe in circumstances. The people who get on in this world are the people who get up and look for the circumstances they want, and, if they can't find them, make them."	`	,	Author:	`	George Bernard Shaw 	`	,	Category:	`	Life	`	}	,
{	Quote:	`"Sit down before fact as a little child, be prepared to give up every preconceived notion... or you shall learn nothing."	`	,	Author:	`	Thomas H. Huxley	`	,	Category:	`	Random	`	}	,
{	Quote:	`"Statistician: A man who believes figures don't lie, but admits that under analysis some of them won't stand up either."	`	,	Author:	`	Evan Esar	`	,	Category:	`	Random	`	}	,
{	Quote:	`"The mint makes it first, it is up to you to make it last."	`	,	Author:	`	Evan Esar	`	,	Category:	`	Money	`	}	,
{	Quote:	`"Truth sits upon the lips of dying men.	"	`	,	Author:	`	Matthew Arnold	`	,	Category:	`	Truth	`	}	,
{	Quote:	`"Underneath this flabby exterior is an enormous lack of character."	`	,	Author:	`	Oscar Levant	`	,	Category:	`	Character	`	}	,
{	Quote:	`"Use what talents you possess: the woods would be very silent if no birds sang there except those that sang best."	`	,	Author:	`	Henry Van Dyke	`	,	Category:	`	Talent	`	}	,
{	Quote:	`"We are what we pretend to be, so we must be careful what we pretend to be."	`	,	Author:	`	Kurt Vonnegut	`	,	Category:	`	Novels	`	}	,
{	Quote:	`"When a dog runs at you, whistle for him."	`	,	Author:	`	Henry David Thoreau	`	,	Category:	`	Dogs	`	}	
]

// Create a random number between 0 and array.length and use that to choose the index of the array
function getRandomQuote(arr) {
  let quoteIndex = Math.floor(Math.random() * quotes.length);  
  for (let i = 0; i < arr.length; i++) {
    let randomQuote = arr[quoteIndex];
  } 
  return randomQuote;
}

//Adds random quote to the mesaage

function printQuote(message) {
  let display = getRandomQuote(); 
  let message = `<p class='quote'>${display.quote}</p>
                      <p> class= Author: ${quotes.source}  Category: ${quotes.category} </p>`;
  document.getElementById('quote-box').innerHTML = message;

}



//click event listener for the print quote button

document.getElementById('load-quote').addEventListener("click", printQuote, false);