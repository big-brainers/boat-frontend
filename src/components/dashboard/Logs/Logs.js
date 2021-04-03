import React from 'react';
import NavPanel from '../NavPanel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const Button = styled.button`
	& .link {
		text-decoration: none;
		color: blue;
		position: absolute;
		right: 300px;
        top: 100px;
        font-size: 30px;
        border: 5px solid blue;
	}
`;
const Logs = () => {
    return (
        <div>
            <NavPanel />
            
            <Button>
                <Link className='link' to='draft'>
                    New Entry
                </Link>
            </Button>
        </div>
    );
};

export default Logs;