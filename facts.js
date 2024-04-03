let requestURL = `https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true`;
const factButton = document.getElementById('fact-button');
const displayFact = document.querySelector('#fact-display');

const options = {
    headers: {
        'X-RapidAPI-Key': '8bb08a213emshbf4c57b8848c8bap1878e7jsn1d50ea401238',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

function generateFacts() {
    fetch(requestURL, options).then(function (response) {
        return response.json();
    }).then(function (data) {
        displayFact.textContent = `Year ${data.year}, ${data.text}`;
    });
}

generateFacts();

factButton.addEventListener('click', generateFacts);
