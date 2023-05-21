// JavaScript logic for handling form submission and displaying the shortened URL
document.getElementById("shorten-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    var longUrlInput = document.getElementById("long-url");
    var longUrl = longUrlInput.value.trim();

    // Perform validation on the long URL
    if (!validateUrl(longUrl)) {
        alert("Please enter a valid URL");
        return;
    }

    // Send the long URL to the server to get the shortened URL
    shortenUrl(longUrl)
        .then(function(shortUrl) {
            displayShortUrl(shortUrl);
        })
        .catch(function(error) {
            console.log("Error:", error);
        });

    // Reset the form
    longUrlInput.value = "";
});

// Validate the URL using a simple regular expression
function validateUrl(url) {
    var pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(url);
}

// Simulate sending the long URL to the server and receiving the shortened URL
function shortenUrl(longUrl) {
    return new Promise(function(resolve) {
        // Simulating server-side processing
        setTimeout(function() {
            var shortUrl = "http://yourdomain.com/shortened-url";
            resolve(shortUrl);
        }, 1000);
    });
}

// Display the shortened URL to the user
function displayShortUrl(shortUrl) {
    var shortUrlContainer = document.getElementById("short-url-container");
    shortUrlContainer.innerHTML = "Shortened URL: <a href='" + shortUrl + "' target='_blank'>" + shortUrl + "</a>";
}
