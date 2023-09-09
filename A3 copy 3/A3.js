// Initialize the number of plates from local storage or set it to a default value
let numberOfPlates = parseInt(localStorage.getItem('numberOfPlates')) || 6;

// Function to generate and display the images based on the number of plates
function initializePlates() {
  const chartDiv = document.getElementById('chart');
  chartDiv.innerHTML = '';

  
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


window.addEventListener('load', initializePlates);

// Call updatePlates when the "Update" button is clicked
function updatePlates() {
  const plateInput = document.getElementById('plateInput');
  if (plateInput.value) {
    numberOfPlates = parseInt(plateInput.value);

    // Store the updated number of plates in local storage
    localStorage.setItem('numberOfPlates', numberOfPlates);

  
    initializePlates();
  }
}








// Function to update the displayed cumulative weight & the last entered weight

let cumulativeWeight = parseInt(localStorage.getItem('cumulativeWeight')) || 0;


let lastEnteredWeight = parseInt(localStorage.getItem('lastEnteredWeight')) || 0;

// Function to update the displayed cumulative weight
function updateCumulativeWeightDisplay() {
  const cumulativeWeightValue = document.getElementById('cumulativeWeightValue');
  cumulativeWeightValue.textContent = cumulativeWeight + ' g';
}

// Function to update the displayed last entered weight
function updateLastEnteredWeightDisplay() {
  const lastEnteredWeightValue = document.getElementById('countUpValue');
  lastEnteredWeightValue.textContent = lastEnteredWeight + ' g';
}

// Function to update the displayed cumulative weight with the count-up effect
function updateCumulativeWeightWithCountUp() {
  const cumulativeWeightValue = document.getElementById('cumulativeWeightValue');
  const targetWeight = cumulativeWeight; // Store the target cumulative weight
  let currentWeight = 0;

  
  const updateInterval = 20; 
  const increment = Math.floor(targetWeight / (5000 / updateInterval));

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


updateCumulativeWeightWithCountUp();


updateCumulativeWeightDisplay();


updateLastEnteredWeightDisplay();

// Function to update both cumulative weight and last entered weight
function updateFoodWaste() {
  const foodWasteInput = document.getElementById('foodWasteInput');

  if (foodWasteInput.value) {
    const weight = parseInt(foodWasteInput.value);
    cumulativeWeight += weight; // Add the new weight to the cumulative weight
    localStorage.setItem('cumulativeWeight', cumulativeWeight); // Store the updated cumulative weight in local storage

   
    updateCumulativeWeightDisplay();

    
    lastEnteredWeight = weight;
    localStorage.setItem('lastEnteredWeight', lastEnteredWeight); // Store the last entered weight in local storage

    // Update the displayed last entered weight
    updateLastEnteredWeightDisplay();

    // Clear the input field
    foodWasteInput.value = '';
  }
}


// Function to reset the cumulative weight to 0 when reset is pressed
function resetCumulativeWeight() {
  cumulativeWeight = 0; 
  localStorage.setItem('cumulativeWeight', cumulativeWeight); 

  
  updateCumulativeWeightDisplay();
}


updateCumulativeWeightWithCountUp();


updateLastEnteredWeightDisplay();








//Function for toggling hidden section on top

function toggleHiddenSection() {
  var hiddenSection = document.getElementById("hiddenSection");
  if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
    hiddenSection.style.display = "block";
  } else {
    hiddenSection.style.display = "none";
  }
}



//Function for automatic carousel

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

// Start automatic carousel 
var interval = setInterval(autoCarousel, 9000);

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





// function for password to access hidden section
const correctPassword = "password"; 

function toggleHiddenSection() {
    var hiddenSection = document.getElementById("hiddenSection");
    var overlay = document.getElementById("overlay");

    if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
        hiddenSection.style.display = "block";
        overlay.style.display = "block"; 
    } else {
        hiddenSection.style.display = "none";
        overlay.style.display = "none"; 
       
        document.getElementById("passwordInput").value = "";
        document.getElementById("passwordMessage").textContent = "";
        
        document.getElementById("contentSection").style.display = "none";
    }
}


function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const passwordMessage = document.getElementById("passwordMessage");

    if (passwordInput === correctPassword) {
        // Password is correct, show the content section
        document.getElementById("contentSection").style.display = "block";
        
        document.getElementById("passwordSection").style.display = "none";
        
        document.getElementById("overlay").style.display = "none";
    } else {
        // Password is incorrect, display an error message
        passwordMessage.textContent = "Password incorrect. Please try again.";
    }
}





// Function to continuously scroll the chart container

function autoScrollChart() {
  const chartContainer = document.getElementById('chart-container');
  
  
  chartContainer.scrollTop += 1;
  
  // Reset the scroll position when it reaches the bottom
  if (chartContainer.scrollTop >= (chartContainer.scrollHeight - chartContainer.clientHeight)) {
    chartContainer.scrollTop = 0;
  }
}

// Interval to auto-scroll the chart container 
const scrollInterval = setInterval(autoScrollChart, 50); 