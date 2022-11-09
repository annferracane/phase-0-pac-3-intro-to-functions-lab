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
function logWhisper(string) {
    console.log(whisper(string));
}

// responds differently to whispers, shouts, and dinner invites
function sayHiToHeadphonedRoommate(string) {
    const responseIfWhisper = "I can't hear you!";
    const responseIfShout = "YES INDEED!";
    const responseIfDinnerInvite = "I would love to!";

    if (string === whisper(string)) {
        return responseIfWhisper;

    } else if (string === shout(string)) {
        return responseIfShout;

    } else if (string === "Let's have dinner together!") {
        return responseIfDinnerInvite;

    }
}