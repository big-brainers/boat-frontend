const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://the-boat-app.herokuapp.com/';
export default APIurl;
