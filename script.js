'use strict'

const button = document.querySelectorAll('.drum_button');
const audio = document.querySelectorAll('audio');
const a_sound = 

button.forEach((e) => {
 e.addEventListener('click', () => {
     playSound(e);
 });
});

document.addEventListener('keyup', (e) => {
    let keyName = e.key;
    const audio_name = document.querySelector(`#${keyName}`);
    audio_name.click();
})

function playSound(e) {
    const audio_name = document.querySelector(`#${e.id} .key_sound`).innerText.toLowerCase();
    const audio = document.querySelector(`.${audio_name}`);
    audio.play();
}