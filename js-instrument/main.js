let myName = "Ximena";
const nameSpan = document.getElementById('name');
nameSpan.textContent = myName;

let myAge= 16;
const ageSpan = document.getElementById('age');
ageSpan.textContent = myAge;

let likesMusic = true;
let likesMusicText;

if(likesMusic === true) {
  likesMusicText = 'me encanta la musica';
} else {
  likesMusicText = 'no me gusta la musica';
  // Codigo si no le gusta la musica
}
const likesMusicSpan = document.getElementById('likesMusic');
likesMusicSpan.textContent = likesMusicText;


const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

console.log(keys.length);

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}

function pressedKey() {
  alert('A key was pressed');
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];


document.addEventListener('keydown', (e) => {
  //alert('pressedKey';
  if(e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if(whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if(blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});
