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
