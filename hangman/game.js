let words = [
    {
        "inputs": 5,
        "category": "I am the hottest planet. Recognize if you can",
        "word": "Venus"
    },
    {
        "inputs": 6,
        "category": "The fastest server in the women's this game was done by Venus Williams who recorded a serve of 205 km/h.",
        "word": "Tennis"
    },
    {
        "inputs": 5,
        "category": "Very popular Asian country",
        "word": "India"  
    },
    {
        "inputs": 5,
        "category": "Get Google's AI to compose your emails here",
        "word": "Gmail"  
    },
    {
        "inputs": 9,
        "category": "I won the 4th Best Teacher award",
        "word": "Priyansha"  
    },
    {
       "inputs": 3,
       "category": "What has to be broken before you can use it?",
       "word": "Egg"  
    },
    {
        "inputs": 6,
       "category": "I’m tall when I’m young, and I’m short when I’m old. What am I?",
       "word": "Candle"
    },
    {
        "inputs": 6,
       "category": "What is always in front of you but can’t be seen?",
       "word": "Future"
    },
    {
        "inputs": 5,
       "category": "David’s parents have three sons: East, West, and what’s the name of the third son?",
       "word": "David"
    }
]

$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    $("#blanks").empty();
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }
    $("#hint").html(randomWord.category)
    var gameOver=false
    $(".clickable").click(function () {
        var correctGuess = false;      
        let id = $(this).attr("id");
        var life = parseInt($("#life").text())
        for (var i = 0; i < randomWord.word.length; i++) {
                if (randomWord.word.charAt(i).toLowerCase() == id) {
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;
                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("You Win!!")
                        correctGuess = true;
                        gameOver=true
                    }}}}
      
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }})}
   
    