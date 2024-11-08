// Function to display current time
function updateTime() {
    const timeContainer = document.getElementById('time');
    const currentTime = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Manila" });
    timeContainer.textContent = currentTime;
}
setInterval(updateTime, 1000);

// Function to fetch random Bible verse
function fetchBibleVerse() {
    fetch('https://joshweb.click/bible')
        .then(response => response.json())
        .then(data => {
            document.getElementById('bibleText').textContent = data.verse;
            document.getElementById('bibleVerse').style.display = 'block';
        })
        .catch(error => console.error('Error fetching Bible verse:', error));
}

// Function to fetch random riddle
function fetchRiddle() {
    fetch('https://riddles-api.vercel.app/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('riddleText').textContent = `${data.riddle} - ${data.answer}`;
            document.getElementById('riddle').style.display = 'block';
        })
        .catch(error => console.error('Error fetching riddle:', error));
}

// Function to close content boxes
function closeContent(id) {
    document.getElementById(id).style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {
    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            function updateBatteryStatus() {
                const batteryPercentage = Math.floor(battery.level * 100);
                document.getElementById("batteryPercentage").textContent = `${batteryPercentage}%`;

                const batteryIcon = document.querySelector(".battery-icon");
                if (batteryPercentage >= 75) {
                    batteryIcon.className = "fas fa-battery-full battery-icon";
                    batteryIcon.style.color = "#4CAF50";
                } else if (batteryPercentage >= 50) {
                    batteryIcon.className = "fas fa-battery-three-quarters battery-icon";
                    batteryIcon.style.color = "#FFEB3B";
                } else if (batteryPercentage >= 25) {
                    batteryIcon.className = "fas fa-battery-half battery-icon";
                    batteryIcon.style.color = "#FFC107";
                } else {
                    batteryIcon.className = "fas fa-battery-quarter battery-icon";
                    batteryIcon.style.color = "#F44336";
                }
            }

            updateBatteryStatus();
            battery.addEventListener("levelchange", updateBatteryStatus);
            battery.addEventListener("chargingchange", updateBatteryStatus);
        });
    } else {
        document.getElementById("batteryPercentage").textContent = "Battery API not supported";
    }
});
