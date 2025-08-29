let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];

const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const callHistoryList = document.getElementById("callHistoryList");
const clearHistoryBtn = document.getElementById("clearHistory");

// heart function
document.querySelectorAll(".heart-icon").forEach((heart) => {
  heart.addEventListener("click", function () {
    if (this.classList.contains("far")) {
      this.classList.remove("far");
      this.classList.add("fas", "heart-active");
      heartCount++;
    } else {
      this.classList.remove("fas", "heart-active");
      this.classList.add("far");
      heartCount--;
    }
    heartCountEl.textContent = heartCount;
  });
});

// copy function
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const number = this.getAttribute("data-number");

    // Copy to clipboard
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`Number ${number} copied to clipboard!`);

        copyCount++;
        copyCountEl.textContent = copyCount;

        copyCountEl.parentElement.classList.add("coin-animation");
        setTimeout(() => {
          copyCountEl.parentElement.classList.remove("coin-animation");
        }, 300);
      })
      .catch((err) => {
        alert("Failed to copy number. Please try again.");
      });
  });
});

// call funtion

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const serviceName = this.getAttribute("data-service");
    const serviceNumber = this.getAttribute("data-number");

    if (coinCount < 20) {
      alert("Insufficient coins! You need at least 20 coins to make a call.");
      return;
    }

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    coinCountEl.parentElement.classList.add("coin-animation");
    setTimeout(() => {
      coinCountEl.parentElement.classList.remove("coin-animation");
    }, 300);

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const historyItem = {
      name: serviceName,
      number: serviceNumber,
      time: timeString,
    };

    callHistory.unshift(historyItem);
    updateCallHistory();
  });
});

// update call

function updateCallHistory() {
  if (callHistory.length === 0) {
    callHistoryList.innerHTML =
      '<p class="text-gray-500 text-sm text-center py-4">No calls made yet</p>';
    return;
  }

  const historyHTML = callHistory
    .map(
      (item) => `
                <div class="border-l-4 border-green-500 pl-3 py-2">
                    <div class="text-sm font-semibold text-gray-800">${item.name}</div>
                    <div class="text-xs text-gray-600">${item.number}</div>
                    <div class="text-xs text-gray-500">${item.time}</div>
                </div>
            `
    )
    .join("");

  callHistoryList.innerHTML = historyHTML;
}

// clear call
clearHistoryBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear call history?")) {
    callHistory = [];
    updateCallHistory();
  }
});
updateCallHistory();
