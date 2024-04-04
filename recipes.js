const formSubmit = $('#search');
const input = $('#search-input')
// const resultsEl = $('#results')
const recipeContainer = $('.recipe-card')
// const foo = document.getElementById()
// const foo = document.getElementById()
// const foo = document.getElementById()


function apiCall(event) {
	event.preventDefault();
	// const formSubmitInput = formSubmit.val();
	;
	console.log("Inside API Call");
	const url = `https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=8&q=${input.val()}`;
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
			localStorage.setItem('search', input.val());
			const recipeContent = data.feed;

			recipeContainer.empty();

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

				cardImg.appendTo(recipeCard);
				cardBody.appendTo(recipeCard);
				cardTitle.appendTo(cardBody);
				cardUrl.appendTo(cardBody);
				recipeCard.appendTo(recipeContainer);
			}
		});
		
};

formSubmit.on('submit', apiCall);
