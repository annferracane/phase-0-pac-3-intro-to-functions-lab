// receives string param and returns same string in all uppercase
function shout(string) {
    return string.toUpperCase();
  }

// receives string param and returns same string in all lowercase
function whisper(string) {
    return string.toLowerCase();
  }

// logs a shout in console
function logShout(string) {
    console.log(shout(string));
}

// logs a whisper in console
function logWhispher(string) {
    console.log(whisper(string));
}