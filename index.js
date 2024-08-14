const motivationalQuotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Act as if what you do makes a difference. It does.",
    "You miss 100% of the shots you don't take.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "In the middle of every difficulty lies opportunity.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream bigger. Do bigger.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days. Great days come from big things.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don't wait for opportunity. Create it.",
    "Dream it. Believe it. Build it.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Believe it. Pursue it.",
    "Success doesn't just happen. It's earned.",
    "Wake up. Kick ass. Repeat.",
    "The only limit is the one you set yourself.",
    "Be stronger than your strongest excuse.",
    "The harder you work, the luckier you get.",
    "Work hard in silence. Let success be your noise.",
    "Success is not for the chosen few, but for the few who choose it.",
    "Opportunities don't happen. You create them.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Your limitation—it's only your imagination.",
    "Push yourself to be the best you can be.",
    "Great things never come from comfort zones.",
    "Dream it. Believe it. Make it happen.",
    "Success is not in what you have, but who you are.",
    "Success is not just about what you accomplish in your life, it's about what you inspire others to do.",
    "Don't stop when you're tired. Stop when you're done.",
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    "Dream it. Believe it. Chase it.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The journey of a thousand miles begins with one step.",
    "Don't be afraid to give up the good to go for the great.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "You are never too old to set another goal or to dream a new dream.",
    "Everything you've ever wanted is on the other side of fear.",
    "You are not a product of your circumstances. You are a product of your decisions.",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
    "Success is not in what you have, but who you are.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Don't be discouraged. It's often the last key in the bunch that opens the lock.",
    "Believe in the power of your dreams.",
    "You are capable of amazing things.",
    "Every day may not be good, but there's something good in every day.",
    "Don't wait for the perfect moment. Take the moment and make it perfect.",
    "The best revenge is massive success.",
    "Nothing in the world can take the place of Persistence.",
    "Opportunities are usually disguised as hard work, so most people don't recognize them.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don't let yesterday take up too much of today.",
    "You don't have to be great to start, but you have to start to be great.",
    "The harder you work, the more you achieve.",
    "Dream it. Believe it. Work for it.",
    "You are stronger than you think.",
    "Every accomplishment starts with the decision to try.",
    "Don't let the noise of others' opinions drown out your own inner voice.",
    "The only limit to your impact is your imagination and commitment.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Your only limit is you.",
    "Believe in yourself and all that you are capable of achieving.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Every day is a new beginning. Take a deep breath, smile, and start again.",
    "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
    "You are never too old to set another goal or to dream a new dream.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Dream big and dare to fail.",
    "If you want something you've never had, you must be willing to do something you've never done.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Great things are not done by impulse, but by a series of small things brought together.",
    "Act as if what you do makes a difference. It does.",
    "You are capable of more than you know.",
    "Success is not in what you have, but who you are.",
    "The harder you work, the luckier you get.",
    "Start where you are. Use what you have. Do what you can.",
    "Everything you've ever wanted is on the other side of fear.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only way to achieve the impossible is to believe it is possible.",
    "You are stronger than you think.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Don't let yesterday take up too much of today.",
    "The future belongs to those who believe in the beauty of their dreams."
];

let messageEl = document.getElementById("message-el")
let buttonEl = document.getElementById("button-el")
let socialMediaEl = document.getElementById("socialmedia-el")


let clickEl = document.getElementById("click-el")
let againEl = document.getElementById("again-el")

function generate() {
    let randomNumber = Math.floor(Math.random()*100)
    return randomNumber
}

socialMediaEl.addEventListener("click", function() {
    socialMediaEl.style.display = 'none';
})


buttonEl.addEventListener("click", function() {
    let random = generate();
    messageEl.innerText = motivationalQuotes[random]
    buttonEl.style.display = "none";
    socialMediaEl.style.display = 'block';
})

messageEl.addEventListener("dblclick", function() {
    againEl.style.display = 'block';
})


function reloadPage() {
    location.reload();
}