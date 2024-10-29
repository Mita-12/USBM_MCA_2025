let seconds = 0;
let timerInterval;
let isPaused = false;

function formatTime(s) {
    let hrs = Math.floor(s / 3600);
    let mins = Math.floor((s % 3600) / 60);
    let secs = s % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!timerInterval) {  // Start only if there's no existing timer
        timerInterval = setInterval(() => {
            if (!isPaused) {
                seconds++;
                document.getElementById('time-display').textContent = formatTime(seconds);
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    isPaused = false;
    document.getElementById('time-display').textContent = formatTime(seconds);
    document.getElementById('pause-btn').textContent = 'Pause';
}

// Start Button Event Listener
document.getElementById('start-btn').addEventListener('click', startTimer);

// Pause/Resume Button Event Listener
document.getElementById('pause-btn').addEventListener('click', () => {
    isPaused = !isPaused;
    document.getElementById('pause-btn').textContent = isPaused ? 'Resume' : 'Pause';
});

// Add Minute Button Event Listener
document.getElementById('add-min-btn').addEventListener('click', () => {
    seconds += 60;
    document.getElementById('time-display').textContent = formatTime(seconds);
});
