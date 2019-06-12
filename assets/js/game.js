$(document).ready(function () {

    var wins = 0;
    var loses = 0;
    var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var totalScore = 0;
    var totalScoreDiv = $('#total-score');

    var numberOptions = [];
    var images = ['assets/images/blue.png', 'assets/images/diamond.png', 'assets/images/purple.png', 'assets/images/red.png']


    function generateNumbers() {
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;;
            numberOptions.push(number);
            console.log(numberOptions[i])

        }
    }
    generateNumbers();
    console.log("target number = " + targetNumber)


    function generateImages() {
        $(".images-holder").empty()
        for (var j = 0; j < numberOptions.length; j++) {
            var image = $('<img>');
            image.addClass('images');
            image.attr('src', images[j])
            image.attr('data-value', numberOptions[j])
            $(".images-holder").append(image);
            $(".target-number").text("Random Number: " + targetNumber);
        } game();
    }
    generateImages();



    function game() {
        $(".images").on("click", function () {
            var value = Number($(this).attr('data-value'));
            console.log(value);
            totalScore += value;
            console.log("total score " + totalScore);
            $("#total-score").text("Total Score: " + totalScore);
            if (totalScore === targetNumber) {
                wins++;
                targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
                totalScore = 0;
                totalScoreDiv.text("Total Score:" + totalScore);
                numberOptions = [];
                generateNumbers();
                generateImages();
                console.log("wins = " + wins);
                $("#win-counter").text("Wins: " + wins);
                $(".target-number").text("Random Number: " + targetNumber);

            }
            if (totalScore > targetNumber) {
                loses++;
                targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
                totalScore = 0;
                totalScoreDiv.text("Total Score: " + totalScore);
                numberOptions = [];
                generateNumbers();
                generateImages();
                console.log("loses = " + loses)
                $("#loss-counter").text("Losses: " + loses);
                $(".target-number").text("Random Number: " + targetNumber);

            }
        });
    }
    // game();
    console.log("total score " + totalScore);


});