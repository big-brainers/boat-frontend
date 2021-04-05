const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://boat-dashboard.herokuapp.com/';
export default APIurl;
