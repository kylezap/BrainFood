let requestURL = `https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true`;
const factButton = document.getElementById('fact-button-select');
const displayFact = document.querySelector('#fact-display');

const options = {
    headers: {
        'X-RapidAPI-Key': '8bb08a213emshbf4c57b8848c8bap1878e7jsn1d50ea401238',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

//Function pulls data from API and then displays the random fact by first stating the year followed by the actual fact
function generateFacts() {
    fetch(requestURL, options).then(function (response) {
        return response.json();
    }).then(function (data) {
        displayFact.textContent = `Year ${data.year}, ${data.text}`;
    });
}

//Loads fact onto page once page loads
generateFacts();

//Generates and prints new fact each time button is clicked
factButton.addEventListener('click', generateFacts);
