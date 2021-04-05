const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://warm-dusk-07017.herokuapp.com/';
export default APIurl;
