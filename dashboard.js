let time = 1500;

let timerInterval;

let sessions = 0;

/* Username */

const username =
localStorage.getItem("username");

document.getElementById("welcomeText")
.innerText =
`Welcome, ${username || "User"} 👋`;

/* Timer */

function updateTimer() {

  let minutes =
    Math.floor(time / 60);

  let seconds =
    time % 60;

  document.getElementById("timer")
    .innerText =
    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {

  clearInterval(timerInterval);

  timerInterval =
    setInterval(() => {

      if(time > 0) {

        time--;

        updateTimer();

      } else {

        clearInterval(timerInterval);

        alert("Session Completed!");

        sessions++;

        updateProgress();
      }

    }, 1000);
}

function pauseTimer() {

  clearInterval(timerInterval);
}

function resetTimer() {

  clearInterval(timerInterval);

  time = 1500;

  updateTimer();
}

/* Tasks */

function addTask() {

  let taskInput =
    document.getElementById("taskInput");

  let task =
    taskInput.value.trim();

  if(task === "") return;

  let li =
    document.createElement("li");

  li.innerText = task;

  li.onclick = () => {

    li.style.textDecoration =
      "line-through";
  };

  document
    .getElementById("taskList")
    .appendChild(li);

  taskInput.value = "";
}

/* Productivity */

function updateProgress() {

  let progress =
    document.getElementById("progress");

  let percentage =
    Math.min(sessions * 20, 100);

  progress.style.width =
    percentage + "%";

  document
    .getElementById("sessionCount")
    .innerText =
    sessions + " Sessions Completed";
}

/* Quotes */

const quotes = [

  "Success starts with consistency.",

  "Focus on progress, not perfection.",

  "Discipline creates success.",

  "Dream big. Work harder.",

  "Small steps every day."
];

let quoteIndex = 0;

setInterval(() => {

  quoteIndex =
    (quoteIndex + 1)
    % quotes.length;

  const quoteElement =
    document.getElementById("quote");

  if(quoteElement){

    quoteElement.innerText =
      quotes[quoteIndex];
  }

}, 4000);

/* Music */

const rainAudio =
document.getElementById("rainAudio");

const forestAudio =
document.getElementById("forestAudio");

const lofiAudio =
document.getElementById("lofiAudio");

const volumeSlider =
document.getElementById("volumeSlider");

function stopAudio() {

  const audios = [

    rainAudio,
    forestAudio,
    lofiAudio
  ];

  audios.forEach(audio => {

    audio.pause();

    audio.currentTime = 0;
  });
}

function playRain() {

  stopAudio();

  rainAudio.play();
}

function playForest() {

  stopAudio();

  forestAudio.play();
}

function playLofi() {

  stopAudio();

  lofiAudio.play();
}

/* Volume */

if(volumeSlider){

volumeSlider.addEventListener(
  "input",
  () => {

    const volume =
      volumeSlider.value;

    rainAudio.volume = volume;

    forestAudio.volume = volume;

    lofiAudio.volume = volume;
  }
);

}

/* Logout */

function logout() {

  window.location.href =
    "login.html";
}

/* Start */

updateTimer();