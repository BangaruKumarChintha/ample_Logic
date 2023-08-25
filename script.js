// const startButton = document.getElementById("startButton");
// const offcanvas = document.getElementById("offcanvas1");
// const progressBar = document.getElementById("progressBar");
// const progressPercentage = document.getElementById("progressPercentage");

// startButton.addEventListener("click", () => {
//     startButton.style.display = "none";
//     progressBar.style.width = "0%";
//     progressPercentage.textContent = "0%";
//     offcanvas.style.display = "block";
//     let progress = 0;
//     const interval = setInterval(() => {
//         progress += 1;
//         progressBar.style.width = `${progress}%`;
//         progressPercentage.textContent = `${progress}%`;
//         if (progress >= 100) {
//             clearInterval(interval);
//             offcanvas.style.display = "none";
//             startButton.style.display = "inline-block";
//             showToast();
//         }
//     }, 100);
// });

// function showToast(message) {
//     $.toast({
//         heading: "Success",
//         text: "Migration applied successfully",
//         showHideTransition: "slide",
//         icon: "success",
//         position: "bottom-right",
//     });
// }
// function closeBtn() {
//     var element = document.getElementById("offcanvas1");
//     element.classList.toggle("close");
// }



var progressBar = document.getElementById("progressBar");
var progressText = document.getElementById("progressText");
var progressBarContainer = document.getElementById("progressBarContainer");
var toggleButton = document.getElementById("toggleButton");
var progressInterval;

function startMigration() {
  progressBarContainer.style.display = "block";
  progressBar.style.width = "0%";
  progressText.innerText = "0%";
  progressInterval = setInterval(updateProgress, 100);
}

function updateProgress() {
  var currentWidth = parseInt(progressBar.style.width);
  var currentPercentage = parseInt(progressText.innerText);
  if (currentPercentage >= 100) {
    clearInterval(progressInterval);
    alert("Migration process completed!");
  } else {
    var newWidth = currentWidth + 10;
    progressBar.style.width = newWidth + "%";
    progressText.innerText = newWidth + "%";
  }
}

function toggleProgressBar() {
  if (progressBarContainer.style.display === "none") {
    progressBarContainer.style.display = "block";
    toggleButton.classList.add("open");
  } else {
    progressBarContainer.style.display = "none";
    toggleButton.classList.remove("open");
  }
}


