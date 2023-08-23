// Countdown to (24 hours from now)
var countDownDate = new Date().getTime() + (24 * 60 * 60 * 1000);

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".hours .value").innerHTML = hours;
    document.querySelector(".minutes .value").innerHTML = minutes;
    document.querySelector(".seconds .value").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
}, 1000);

document.querySelector(".free_play_form_button").addEventListener("click", function() {
    let newCount = 0;
    var clrInterval = setInterval(function () {
        newCount++;
        // document.write(newCount)
        document.querySelector("#free_play_first_digit").innerHTML = newCount;
        document.querySelector("#free_play_third_digit").innerHTML = newCount;
        document.querySelector("#free_play_fourth_digit").innerHTML = newCount;
        document.querySelector("#free_play_fifth_digit").innerHTML = newCount;
        if(newCount == 9) {
            newCount = 0;
        }
        
        if (newCount <= 9) {
            document.querySelector("#free_play_second_digit").innerHTML = newCount + 1;
        }

        if (newCount <= 7) {
            document.querySelector("#free_play_fourth_digit").innerHTML = newCount + 2;
        }

        if (newCount <= 6) {
            document.querySelector("#free_play_fifth_digit").innerHTML = newCount + 3;
        }
        
    }, 1);
    setInterval(() => {
        document.querySelector("#free_play_first_digit").innerHTML = 0;
        document.querySelector("#free_play_second_digit").innerHTML = 0;
        document.querySelector("#free_play_third_digit").innerHTML = 0;
        document.querySelector("#free_play_fourth_digit").innerHTML = 0;
        document.querySelector("#free_play_fifth_digit").innerHTML = 0;
        clearInterval(clrInterval)
    }, 1000);
})




