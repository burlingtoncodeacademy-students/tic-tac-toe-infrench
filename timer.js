let count;
let minutes;
let seconds;
let intervalId;
let timer = document.getElementById("timer")
function time() {
    count = 0
    intervalId = setInterval(tick, 1000);
    function tick() {
        minutes = math.floor(count / 60);
        seconds = count % 60;
        if (seconds >= 10) {
            timer.textContent = `${minutes}:${seconds}`
        } else {
            timer.textContent = `${minutes}:0${seconds}`;
        }
        count++
    }
}