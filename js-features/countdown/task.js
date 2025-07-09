let timeElement = document.getElementById("timer");

function timeConverter(durationInSeconds) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;
  const displayTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  return displayTime;
}

function timer(element) {
  currentTime = element.textContent;

  intervalID = setInterval(() => {
    currentTime--;
    element.textContent = timeConverter(currentTime);

    if (currentTime == 0) {
      clearInterval(intervalID);
      alert("Вы победили в конкурсе");
    }
  }, 1000);
}

timer(timeElement);
