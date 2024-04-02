const foo = document.getElementById()
const foo = document.getElementById()
const foo = document.getElementById()
const foo = document.getElementById()

const url = 'https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7d8c042289mshc514aced7d88fe4p1a19f8jsn3772f5b49341',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}