$(document).ready(function () {


    //*********************** /
    var wins = 0;
    var loses = 0;
    var targetNumber = 78;
    var totalScore = 0;
    var totalScoreDiv = $('#total-score');

    var numberOptions = [];
    var images = ['assets/images/blue.png', 'assets/images/diamond.png', 'assets/images/purple.png', 'assets/images/red.png']


    function generateNumbers() {
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 9) * 1;;
            numberOptions.push(number);
        }
    }
    generateNumbers();
    // console.log(numberOptions);
    // var image = $("<img>")
    // image.attr("src", images[0])
    // image.attr("data-value", numberOptions[0])
    // $(".images-holder").append(image);
    function generateImages() {
        $(".images-holder").empty()
        for (var j = 0; j < numberOptions.length; j++) {
            var image = $('<img>');
            image.addClass('images');
            image.attr('src', images[j])
            image.attr('data-value', numberOptions[j])
            $(".images-holder").append(image);
        } game();
    }
    generateImages();



    function game() {
        $(".images").on("click", function () {
            var value = Number($(this).attr('data-value'));
            console.log(value);
            totalScore += value;
            console.log("total score " + totalScore);
            console.log("target number = " + targetNumber)
            if (totalScore === targetNumber) {
                wins++;
                targetNumber = Math.floor(Math.random() * 99) + 40;
                totalScore = 0;
                totalScoreDiv.text(totalScore);
                numberOptions = [];
                generateNumbers();
                generateImages();
                console.log("wins = " + wins);

            }
            if (totalScore > targetNumber) {
                loses++;
                targetNumber = Math.floor(Math.random() * 99) + 40;
                totalScore = 0;
                totalScoreDiv.text(totalScore);
                numberOptions = [];
                generateNumbers();
                generateImages();
                console.log("loses = " + loses)

            }
        });
    }
    game();
    console.log("total score " + totalScore);


    // totalScoreDiv.text(totalScore)



    //         else {
    //             loses++;
    //             targetNumber = Math.floor(Math.random() * 99) + 40;
    //             totalScore = 0;
    //             totalScoreDiv.text(totalScore);
    //             numberOptions = [];
    //             generateNumbers();
    //             generateImages(numberOptions);
    //         }
    //     })
    // }
    // game();
    // ***************************************


    // Global variables
    // var num1 = 0;
    // var num2 = 0;
    // var num3 = 0;
    // var num4 = 0;
    // var crystalTotal = 0;
    // var wins = 0;
    // var losses = 0;

    // console.log("hello");


    // // Picks a random number.
    // var randomNumber = Math.floor(Math.random() * 102) + 19;
    // console.log(randomNumber);

    // $("#random-number").text("random number: " + randomNumber);
    // // console.log(randomNumber);


    // // Picks a random number for a crystal.
    // function randomCrystal() {
    //     num1 = Math.floor((Math.random() * 12) + 1);
    //     console.log("Number One = " + num1);
    //     num2 = Math.floor((Math.random() * 12) + 1);
    //     console.log(num2);
    //     num3 = Math.floor((Math.random() * 12) + 1);
    //     console.log(num3);
    //     num4 = Math.floor((Math.random() * 12) + 1);
    //     console.log(num4);
    // };
    // randomCrystal();

    // // Game restart
    // function restart() {
    //     randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //     randomCrystal();
    //     crystalTotal = 0;
    // };


    // // Sets up click for button one.
    // $('.button-1').on("click", function () {
    //     crystalTotal += num1;
    //     $("#total-score").text("Crystal Total: " + crystalTotal);
    //     console.log(crystalTotal)
    //     if (crystalTotal == randomNumber) {
    //         wins();
    //         restart();
    //     }
    //     else if (crystalTotal > randomNumber) {
    //         lose();
    //         restart();
    //     }
    // });

    // $('.button-2').on("click", function () {
    //     crystalTotal += num2;
    //     $("#total-score").text("Crystal Total: " + crystalTotal);
    //     console.log(crystalTotal)
    //     if (crystalTotal == randomNumber) {
    //         wins();
    //         restart();
    //     }
    //     else if (crystalTotal > randomNumber) {
    //         lose();
    //         restart();
    //     }
    // });

    // $('.button-3').on("click", function () {
    //     crystalTotal += num3;
    //     $("#total-score").text("Crystal Total: " + crystalTotal);
    //     console.log(crystalTotal)
    //     if (crystalTotal == randomNumber) {
    //         wins();
    //         restart();
    //     }
    //     else if (crystalTotal > randomNumber) {
    //         lose();
    //         restart();
    //     }
    // });

    // $('.button-4').on("click", function () {
    //     crystalTotal += num4;
    //     $("#total-score").text("Crystal Total: " + crystalTotal);
    //     console.log(crystalTotal)
    //     if (crystalTotal == randomNumber) {
    //         wins();
    //         restart();
    //     }
    //     else if (crystalTotal > randomNumber) {
    //         lose();
    //         restart();
    //     }
    // });

    // // var wins = function () {
    // //     wins++
    // //     console.log(wins)
    // // }

    // // Adds wins to win counter.
    // function wins() {
    //     console.log(wins)
    //     alert("You win!");
    //     wins++;
    //     $("#win-counter").text("win counter: " + wins);
    // };

    // // Adds losses to loss counter.
    // function lose() {
    //     alert("You lose!");
    //     losses++;
    //     $("#loss-counter").text("loss counter: " + losses);
    // };


});