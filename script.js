document.addEventListener("DOMContentLoaded", () => {
    // Fetch IP information
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip-info").innerText = `Your IP Address is: ${data.ip}`;
        })
        .catch(error => {
            document.getElementById("ip-info").innerText = "Unable to fetch IP address.";
            console.error("Error fetching IP:", error);
        });

    // Display timezone for Asia/Manila
    const options = { timeZone: "Asia/Manila", timeZoneName: "short" };
    const date = new Intl.DateTimeFormat([], options).format(new Date());
    document.getElementById("timezone").innerText = `Timezone: Asia/Manila (${date})`;
});
