// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_screen img");
const cpuResult = document.querySelector(".cpu_screen img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_images img"); // Select the img elements directly

// Create an array of CPU options
const cpuOptions = [
  { image: "media/CPU_Rock.png", value: "R" },
  { image: "media/CPU_Paper.png", value: "P" },
  { image: "media/CPU_Scissor.png", value: "S" },
];

// Create an object to store the outcomes
const outcomes = {
  R: { R: "Draw", P: "Cpu", S: "User" },
  P: { R: "User", P: "Draw", S: "Cpu" },
  S: { R: "Cpu", P: "User", S: "Draw" },
};

// Initialize scores
let userScore = 0;
let cpuScore = 0;

// Display initial scores
document.getElementById("user-score").textContent = `User: ${userScore}`;
document.getElementById("cpu-score").textContent = `CPU: ${cpuScore}`;

// Add event listener to each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    // Remove "active" class from all option images
    optionImages.forEach((img) => img.classList.remove("active"));

    // Add "active" class to the clicked image
    image.classList.add("active");

    // Update user image
    userResult.src = e.target.src;

    // Generate a random CPU option
    const cpuOption = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    cpuResult.src = cpuOption.image;

    // Determine the outcome
    const userValue = ["R", "P", "S"][index];
    const cpuValue = cpuOption.value;
    const outcome = outcomes[userValue][cpuValue];

    // Update scores
    if (outcome === "User") {
      userScore++;
    } else if (outcome === "Cpu") {
      cpuScore++;
    }

    // Display scores
    document.getElementById("user-score").textContent = `User: ${userScore}`;
    document.getElementById("cpu-score").textContent = `CPU: ${cpuScore}`;

    // Display the result
    result.textContent = outcome === "Draw" ? "Match Draw" : `${outcome} Won!!`;

    // Add a timeout to delay the result calculation
    setTimeout(() => {
      gameContainer.classList.remove("start");
    }, 2500);
  });
});
