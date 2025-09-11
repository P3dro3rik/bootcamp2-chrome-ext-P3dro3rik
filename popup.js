let timer;
let seconds = 0;

const timeEL = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateTime() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    timeEl.textContent = 
        `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
    if (!timer){
        timer = setInterval(() => {
            seconds++;
            updateTime();
          }, 1000);
        }
    });
stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateTime();
});
updateTime();