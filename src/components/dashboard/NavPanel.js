import './CSS/Navpanel.css';
import { Link } from 'react-router-dom';


export default function App() {
	return (
		<div className='leftNavBox'>
			<h1>BOAT</h1>
			<Link to='/dashboard'>Dashboard</Link>
			<Link to='/schedule'>Schedule</Link>
			<Link to='/logs'>Logs</Link>
			{/* Each one of these titles has to be enclosed in Link tags to set up routes for them.
            They are also going to need their own components.
            Make a main area for the routes */}
			<div>
				{/* extra div for bottom of leftNavBox
                contains the profile of the user 
                has icon that allows for a pull down */}
			</div>
			<div>
				{/* Another div for the link to sign out which should take you 
                back to the homepage and disconnect you from the database */}
			</div>
		</div>
	);
}
