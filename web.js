document.addEventListener("DOMContentLoaded", () => {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    // Function to redirect to the second website on clicking Yes
    yesBtn.addEventListener("click", () => {
        window.location.href = "https://xtnguyen1108.github.io/xtn.github.io/"; // Update this with the actual path to the second website
    });

    // Function to dislocate the No button on mouseover
    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });

    // Define an array of class names for the small gifs
    const smallGifClasses = [
        "small-gif",
        "small-gif1",
        "small-gif2",
        "small-gif3",
        "small-gif4",
        "small-gif5",
        "small-gif6",
        "small-gif7",
        "small-gif8",
        "small-gif9",
        "small-gif10",
        "small-gif11",
        "small-gif12",
        "small-gif13",
        "small-gif14",
        "small-gif15",
        "small-gif16",
        "small-gif17",
        "small-gif18",
        "small-gif19"
    ];

    // Loop through each small gif class and set random positions
    smallGifClasses.forEach((className) => {
        const smallGifs = document.querySelectorAll("." + className);

        smallGifs.forEach((smallGif) => {
            // Generate random positions
            const randomX = Math.random() * (window.innerWidth - 50); // Adjusted for the width of the small gif
            const randomY = Math.random() * (window.innerHeight - 50); // Adjusted for the height of the small gif

            // Apply random positions to each small gif
            smallGif.style.left = randomX + "px";
            smallGif.style.top = randomY + "px";
        });
    });
});
