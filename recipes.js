const formSubmit = $('#search');
const input = $('#search-input')
const resultsEl = $('#results')
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
			// console.log(recipeContent[0].display)

			const recipeContent = data.feed

			for (let i = 0; i < recipeContent.length; i++) {

				const recipeName = recipeContent[i].display.displayName;
				const recipeImg = recipeContent[i].display.images[0];
				const recipeUrl = recipeContent[i].display.source.sourceRecipeUrl

				// console.log(recipeName, recipeImg, recipeUrl);

				const recipeCard = $('<div>')
					.addClass('card m-3 ').attr('style', 'width: 18rem;');
				const cardImg = $('<img>').attr('src', recipeImg).addClass('card-img-top');
				const cardBody = $('<div>').addClass('card-body');
				const cardTitle = $('<h5>').addClass('card-title').text(recipeName);
				const cardUrl = $('<a>').addClass("btn btn-primary stretched-link").attr('href', recipeUrl).text('See Recipe');

				// console.log(recipeCard);
				// cardTitle.appendTo(cardBody);				
				// cardBody.appendTo(recipeCard);
				// cardImg.appendTo(recipeCard);
				// cardUrl.appendTo(cardBody);
				// recipeCard.appendTo(resultsEl);


				// Append the elements in the correct order to match the HTML structure
cardImg.appendTo(recipeCard);
cardBody.appendTo(recipeCard);
cardTitle.appendTo(cardBody);
cardUrl.appendTo(cardBody);

// Append the final recipe card to the results element
recipeCard.appendTo(resultsEl);
			}
		});
};

formSubmit.on('submit', apiCall);


//feed[i].content.details.images
//feed[i].content.details.name:
//feed[i].content.details.numberOfServings:
//feed[i].content.details.rating:
//feed[i].content.details.totalTime: 