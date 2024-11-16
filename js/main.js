// ^^^^^^^^^^^^^ Random Quote Generator ^^^^^^^^^^^^^ 
var Quotes = [
  {
    Quote: "Be yourself; everyone else is already taken.",
    Author: "― Oscar Wilde",
  },
  {
    Quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    Author: "― Albert Einstein",
  },
  {
    Quote: "A room without books is like a body without a soul.",
    Author: "― Marcus Tullius Cicero",
  },
  {
    Quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    Author: "― Bernard M. Baruch",
  },
  {
    Quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    Author: "― Dr. Seuss",
  },
  {
    Quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    Author: "– Maya Angelou",
  },
  {
    Quote: "Only a life lived for others is a life worthwhile.",
    Author: "– Albert Einstein",
  },
  {
    Quote: "You only live once, but if you do it right, once is enough.",
    Author: "– Mae West",
  },
  {
    Quote: "Do not let making a living prevent you from making a life.",
    Author: "– John Wooden",
  },
  {
    Quote: "The way to get started is to quit talking and begin doing.",
    Author: "– Walt Disney",
  },
  {
    Quote: "It is better to fail in originality than to succeed in imitation.",
    Author: "– Herman Melville",
  },
  {
    Quote: "Always remember, your focus determines your reality.",
    Author: "– George Lucas",
  },
  {
    Quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    Author: "– Albert Schweitzer",
  },
  {
    Quote: "Doubt kills more dreams than failure ever will.",
    Author: "– Suzy Kassem",
  },
  {
    Quote: "Always remember, your focus determines your reality.",
    Author: "– George Lucas",
  },
  {
    Quote: "Don’t worry about failure; you only have to be right once.",
    Author: "– Drew Houston",
  },
  {
    Quote: "I am a rare species, not a stereotype.",
    Author: "– Ivan E. Coyote",
  },
];
document.getElementById("btn").addEventListener("click", function () {
  event.preventDefault();
  var RandomQuotes = Quotes[Math.floor(Math.random() * Quotes.length)];

  document.getElementById("RanQuota").innerHTML = RandomQuotes.Quote;
  document.getElementById("RanQuotaauthor").innerHTML = RandomQuotes.Author;
});
// ^^^^^^^^^^^^^ Speech Of The Quote ^^^^^^^^^^^^^ 
var speech = new SpeechSynthesisUtterance();
speech.rate = 0.9;
speech.pitch = 0.9;
var voices = [];
function setVoice() {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices.find((voice) => voice.lang === "en-US") || voices[0];
}
window.speechSynthesis.onvoiceschanged = setVoice;
setVoice();
document.querySelector(".fa-volume-high").addEventListener("click", () => {
  speech.text =
    document.getElementById("RanQuota").textContent +
    " " +
    document.getElementById("RanQuotaauthor").textContent;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
});
// ^^^^^^^^^^^^^ Toast Of The Quote ^^^^^^^^^^^^^
var notyf = new Notyf({
  position: { x: "right", y: "top" },
  duration: 2500,
  ripple: true,
});

const toastButton = document.getElementById("heloat");
const toastElement = document.getElementById("liveToast");

var copyButton = document.getElementById("heloat");
copyButton.addEventListener("click", () => {
  var textToCopy = document.getElementById("RanQuota").textContent;

  navigator.clipboard.writeText(textToCopy).then(() => {
    notyf.success("The Quote Copied Successfully");
  });
});
// ^^^^^^^^^^^^^ Share Of The Quote ^^^^^^^^^^^^^
const shareBtn = document.getElementById("shareBtn");
const QuoteText = document.getElementById("RanQuota");
const authorName = document.getElementById("RanQuotaauthor");

shareBtn.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        title: "Quote of the Day",
        text: `${QuoteText.innerText} -- ${authorName.innerText}`,
      })
      .then(() => console.log("Quote shared successfully"))
      .catch((error) => console.log("Error sharing", error));
  } else {
    alert("The current browser does not support the Share API.");
  }
});
