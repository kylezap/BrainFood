const formSubmit = $('#search');
const input = $('#search-input')
// const foo = document.getElementById()
// const foo = document.getElementById()
// const foo = document.getElementById()

function apiCall(event) {
	event.preventDefault();
	// const formSubmitInput = formSubmit.val();
	;
	console.log("Inside API Call");
	const url = `https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=10&q=${input.val()}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7d8c042289mshc514aced7d88fe4p1a19f8jsn3772f5b49341',
			'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
		}
	};

	fetch(url, options)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
		});

	

};


formSubmit.on('submit', apiCall);


//feed[i].content.details.images
//feed[i].content.details.name:
//feed[i].content.details.numberOfServings:
//feed[i].content.details.rating:
//feed[i].content.details.totalTime: 