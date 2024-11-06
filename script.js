function updateTime() {
    const options = { timeZone: 'Asia/Manila', hour12: true };
    const manilaTime = new Date().toLocaleString('en-US', options);
    document.getElementById('time').textContent = manilaTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize the time display
updateTime();
