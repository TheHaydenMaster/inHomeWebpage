function makeNoise() {
    var userMessage = document.getElementById("inputField").value;
    var pTag = document.getElementById("display");

    const speak = (msg) => {
        const sp = new SpeechSynthesisUtterance(msg);
        [sp.voice] = speechSynthesis.getVoices();
       speechSynthesis.speak(sp);
    };
    
    speak(userMessage);
    pTag.innerHTML = userMessage;
}