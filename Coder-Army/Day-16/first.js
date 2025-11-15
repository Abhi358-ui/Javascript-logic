const randomQuotes = [
  "Dream big, work hard, stay humble.",
  "Success doesn’t come to you — you go to it.",
  "Do something today that your future self will thank you for.",
  "It always seems impossible until it’s done.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Doubt kills more dreams than failure ever will.",
  "Happiness is not by chance, but by choice.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "In the middle of every difficulty lies opportunity.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Your only limit is your mind.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Little by little, a little becomes a lot.",
  "Don’t be afraid to start over. It’s a new chance to rebuild what you want.",
  "Discipline is the bridge between goals and accomplishment.",
  "Focus on progress, not perfection.",
  "You don’t find the happy life. You make it.",
  "Stay patient and trust your journey.",
  "Every day is a second chance.",
];

let btn = document.getElementById('button');
let content = document.querySelector('h1');

btn.addEventListener('click',()=> {
  content.innerText = randomQuotes[Math.floor(Math.random()*20)];
})
