// created by: Gil

var m_c = {
    " ": "/", "a": ".-", "b": "-...", "c": "-.-.", "d": "-..",
    "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..",
    "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.",
    "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...",
    "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
    "y": "-.--", "z": "--..", "0": "-----", "1": ".----", "2": "..---",
    "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..",
    "'": ".----.", "!": "-.-.--", "/": "-..-.", "(": "-.--.", ")": "-.--.-",
    "&": ".-...", ":": "---...", ";": "-.-.-.", "=": "-...-", "+": ".-.-.",
    "=": "-....-", "_": "..--.-", '"': ".-..-.", "$": "...-..-", "@": ".--.-."
};

var c_m = Object.assign(...Object.values(m_c).map((keys, i) => ({ [keys]: Object.keys(m_c)[i]})))

function encrypt() {
    let plaintext = document.getElementById('input-text').value.toLowerCase();
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
        if (plaintext[i] in m_c) {
            ciphertext += m_c[plaintext[i]] + ' ';
        };
    };
    document.getElementById('output').innerHTML = ciphertext;
};

function decrypt() {
    let ciphertext = document.getElementById('input-text').value;
    let msplit = ciphertext.split(" ");
    let plaintext = '';
    for (let i = 0; i < msplit.length; i++) {
        if (msplit[i] in c_m) {
            plaintext += c_m[msplit[i]];
        };
    };
    document.getElementById('output').innerHTML = plaintext;
};