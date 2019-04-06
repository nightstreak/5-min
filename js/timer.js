function countdown(minutes) {
    let seconds = 60;
    let mins = minutes;

    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want.
        let counter = document.getElementById("counter");
        let current_minutes = mins - 1;
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countdown(mins - 1);
            }
        }
    }

    tick();
}
