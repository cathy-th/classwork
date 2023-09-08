// Initialize the number of plates from local storage or set it to a default value
let numberOfPlates = parseInt(localStorage.getItem('numberOfPlates')) || 6;

// Function to generate and display the images based on the number of plates
function initializePlates() {
  const chartDiv = document.getElementById('chart');
  chartDiv.innerHTML = '';

  // Create and append image elements
  for (let i = 0; i < numberOfPlates; i++) {
    const plateImage = document.createElement('img');
    plateImage.className = 'plate-image'; 
    plateImage.src = './images/plate_pic.png'; 
    chartDiv.appendChild(plateImage);
  }

  // Update the plate count display
  const plateCount = document.getElementById('plateCount');
  plateCount.textContent = `${numberOfPlates}`;
}

// Call initializePlates when the page loads
window.addEventListener('load', initializePlates);

// Call updatePlates when the "Update" button is clicked
function updatePlates() {
  const plateInput = document.getElementById('plateInput');
  if (plateInput.value) {
    numberOfPlates = parseInt(plateInput.value);

    // Store the updated number of plates in local storage
    localStorage.setItem('numberOfPlates', numberOfPlates);

    // Call initializePlates to update the images and plate count
    initializePlates();
  }
}



// Initialize cumulative weight from local storage or set it to 0 if it doesn't exist
let cumulativeWeight = parseInt(localStorage.getItem('cumulativeWeight')) || 0;

// Function to update the displayed cumulative weight
function updateCumulativeWeightDisplay() {
  const cumulativeWeightValue = document.getElementById('cumulativeWeightValue');
  cumulativeWeightValue.textContent = cumulativeWeight + ' g';
}

// Function to update the displayed cumulative weight with the count-up effect
function updateCumulativeWeightWithCountUp() {
  const cumulativeWeightValue = document.getElementById('cumulativeWeightValue');
  const targetWeight = cumulativeWeight; // Store the target cumulative weight
  let currentWeight = 0;

  // Create a timer to increment the displayed weight
  const updateInterval = 20; // Adjust this for the desired speed
  const increment = Math.floor(targetWeight / (5000 / updateInterval)); // Increment based on the desired duration

  const updateDisplay = () => {
    currentWeight += increment;
    if (currentWeight >= targetWeight) {
      currentWeight = targetWeight;
      clearInterval(countUpInterval);
    }
    cumulativeWeightValue.textContent = currentWeight + ' g';
  };

  // Start the count-up effect
  const countUpInterval = setInterval(updateDisplay, updateInterval);
}

// Call the function to update the cumulative weight display with count-up effect when the page loads
updateCumulativeWeightWithCountUp();





// Call the function to update the cumulative weight display when the page loads
updateCumulativeWeightDisplay();

function updateFoodWaste() {
  const foodWasteInput = document.getElementById('foodWasteInput');

  if (foodWasteInput.value) {
    const weight = parseInt(foodWasteInput.value);
    cumulativeWeight += weight; // Add the new weight to the cumulative weight
    localStorage.setItem('cumulativeWeight', cumulativeWeight); // Store the updated cumulative weight in local storage

    // Update the displayed cumulative weight
    updateCumulativeWeightDisplay();

    // Clear the input field
    foodWasteInput.value = '';
  }
}

function resetCumulativeWeight() {
  cumulativeWeight = 0; // Reset the cumulative weight to 0
  localStorage.setItem('cumulativeWeight', cumulativeWeight); // Store the updated cumulative weight in local storage

  // Update the displayed cumulative weight
  updateCumulativeWeightDisplay();
}



function toggleHiddenSection() {
  var hiddenSection = document.getElementById("hiddenSection");
  if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
    hiddenSection.style.display = "block";
  } else {
    hiddenSection.style.display = "none";
  }
}


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function autoCarousel() {
  plusSlides(1); 
}

// Start automatic carousel with an interval of 3 seconds (3000 milliseconds)
var interval = setInterval(autoCarousel, 7000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




function toggleHiddenSection() {
  var hiddenSection = document.getElementById("hiddenSection");
  if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
      hiddenSection.style.display = "block";
  } else {
      hiddenSection.style.display = "none";
  }
}

// Function to continuously scroll the chart container
function autoScrollChart() {
  const chartContainer = document.getElementById('chart-container');
  
  // Scroll down by a certain amount (adjust as needed)
  chartContainer.scrollTop += 1;
  
  // Reset the scroll position when it reaches the bottom
  if (chartContainer.scrollTop >= (chartContainer.scrollHeight - chartContainer.clientHeight)) {
    chartContainer.scrollTop = 0;
  }
}

// Set an interval to auto-scroll the chart container (adjust the interval duration as needed)
const scrollInterval = setInterval(autoScrollChart, 50); // Change the interval duration as needed