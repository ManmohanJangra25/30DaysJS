'use strict'

const hour_hand = document.querySelector('.hours');
const minute_hand = document.querySelector('.minutes');
const second_hand = document.querySelector('.seconds');

setInterval(() => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    second_hand.style.transform = `rotate(${seconds * 6}deg)`;
    minute_hand.style.transform = `rotate(${minutes * 6}deg)`;
    hour_hand.style.transform = `rotate(${hours * 30}deg)`;
    console.log(hours * 30, minutes * 6, seconds * 6);
}, 1000);