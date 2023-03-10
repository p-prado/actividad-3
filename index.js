// Define the possible weather conditions
const conditions = ["Clear", "Cloudy", "Rainy"];

const dateControl = document.getElementById("dateControl");
const dateButton = document.getElementById("dateButton");
const todayButton = document.getElementById("todayButton");
const dateHeading = document.getElementById("dateHeading");
const resultsDate = document.getElementById("resultsDate");
const resultsToday = document.getElementById("resultsToday");

// Handle clicks on the date button.
dateButton.addEventListener("click", function () {
    // Set the heading to equal the selected date.
    dateHeading.innerHTML = dateControl.value;

    // Show the right results format
    resultsDate.classList.add("visible");
    resultsToday.classList.remove("visible");

    // Call to API, returns an object.
    getDateWeather(dateControl.value)
        .then(weatherData => {
            document.getElementById("dayTemp").innerHTML = weatherData.temperature;
            document.getElementById("dayConditions").innerHTML = weatherData.condition;
        })
        .catch(err => {
            console.error(err);
        });
});

// Handle clicks on the today button.
todayButton.addEventListener("click", function () {
    // Show the right results format
    resultsDate.classList.remove("visible");
    resultsToday.classList.add("visible");
    // Get today's date in string format and assign it to the heading value.
    const today = new Date();
    const dateOptions = {
        weekday: 'long',
        /*year: 'numeric',*/
        month: 'long',
        day: 'numeric'
    };
    dateHeading.innerHTML = today.toLocaleDateString("en-US", dateOptions);
    // Call to API, returns an object.
    getTodayWeather(today)
        .then(weatherData => {
            document.getElementById("morningTemp").innerHTML = weatherData.morning.temperature;
            document.getElementById("morningConditions").innerHTML = weatherData.morning.condition;
            document.getElementById("afternoonTemp").innerHTML = weatherData.afternoon.temperature;
            document.getElementById("afternoonConditions").innerHTML = weatherData.afternoon.condition;
            document.getElementById("nightTemp").innerHTML = weatherData.night.temperature;
            document.getElementById("nightConditions").innerHTML = weatherData.night.condition;
        })
        .catch(err => {
            console.error(err);
        });
});

// Function to return fake weather data as an Object
async function getDateWeather(date) {
    return new Promise((resolve, reject) => {
        // Set time limit for opperation to be 5000 ms.
        setTimeout(() => {
            if (date != null && date != undefined && date != "") {
                let result = {
                    temperature: getRandomTemperature(),
                    condition: getRandomCondition()
                }
                resolve(result);
            } else {
                reject(Error("Call to get weather data for the specified date failed because no date was selected."))
            }
        }, 5000);
    });
}

// Function to return fake weather data as an object.
async function getTodayWeather(date) {
    return new Promise((resolve, reject) => {
        // Random variable to simulate the success or failure of the API call.
        let isSuccessful = true;
        // Set time limit for opperation to be 5000 ms.
        setTimeout(() => {
            if (isSuccessful) {
                console.log(date)
                let result = {
                    morning: {
                        temperature: getRandomTemperature(),
                        condition: getRandomCondition()
                    },
                    afternoon: {
                        temperature: getRandomTemperature(),
                        condition: getRandomCondition()
                    },
                    night: {
                        temperature: getRandomTemperature(),
                        condition: getRandomCondition()
                    }
                };
                resolve(result);
            } else {
                reject(Error("Call to get weather data failed."));
            }
        }, 5000);
    });
}

// Function to return a random number, including the minimum and maximum specified as parameters.
function getRandomNumber(min, max) {
    max += 1;
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}

// Function to return a random temperature between 5 and 30 degrees.
function getRandomTemperature() {
    return getRandomNumber(5, 30);
}

// Function to return a random condition from the conditions array.
function getRandomCondition() {
    return conditions[getRandomNumber(0, 2)];
}

// Returns a date formated as: Monday, January 30
function getDate(date) {
    const today = new Date(date);
    const dateOptions = {
        weekday: 'long',
        /*year: 'numeric',*/
        month: 'long',
        day: 'numeric'
    };
    return today.toLocaleDateString("en-US", dateOptions);
}