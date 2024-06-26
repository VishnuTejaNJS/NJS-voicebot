const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hour = day.getHours();
  if (hour >= 0 && hour < 12) {
      speak("Good Morning Boss...");
  } else if (hour >= 12 && hour < 17) {
      speak("Good Afternoon Master...");
  } else {
      speak("Good Evening Sir...");
  }
}
window.addEventListener('load', () => {
  speak("Initializing N J S...");
  wishMe();
});
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};
btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});
function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://www.facebook.com/vishnu.teja.16718", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open gmail")) {
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        speak("Opening Gmail...");
    } else if (message.includes("open linkedin")) {
        window.open("https://www.linkedin.com/in/vishnu-teja-n-j-s-429421103/", "_blank");
        speak("Opening Linkedin..."); 
    } else if (message.includes("open flipkart")) {
        window.open("https://www.flipkart.com/", "_blank");
        speak("Opening Flipkart..."); 
    } else if (message.includes("open amazon")) {
        window.open("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=14131448347070846593&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040219&hvtargid=kwd-10573980&hydadcr=14453_2316415&gad_source=1", "_blank");
        speak("Opening Amazon..."); 
    } else if (message.includes("open spotify")) {
        window.open("https://open.spotify.com/", "_blank");
        speak("Opening Spotify..."); 
    }else if (message.includes("what is the time now")) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes("what is today's date")) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes("open calculator")) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes("open wikipedia")) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    }  else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}