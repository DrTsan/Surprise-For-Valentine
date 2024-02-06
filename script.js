// Select the "Yes" and "No" buttons
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const videoContainer = document.getElementById("videoContainer");
const valentineVideo = document.getElementById("valentineVideo");

// Add mouseover event listener to the "No" button
noButton.addEventListener("mouseover", function() {
    // Generate random X and Y positions within the viewport
    const xPos = Math.random() * (window.innerWidth - noButton.clientWidth);
    const yPos = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    // Position the "No" button at the generated coordinates
    noButton.style.position = "absolute";
    noButton.style.left = xPos + "px";
    noButton.style.top = yPos + "px";
});

    // Disable the "No" button to prevent further clicks
    noButton.disabled = true;
});

// Add click event listener to the "Yes" button
yesButton.addEventListener("click", function() {
    // Hide the "Yes" and "No" buttons
    yesButton.style.display = "none";
    noButton.style.display = "none";
    // Show the video container
    videoContainer.style.display = "block";
    // Start playing the video
    valentineVideo.play();
});
