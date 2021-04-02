import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import next from '../../../images/right.png';

const CardContainerSmall = styled.div`
	width: 448px;
	height: 344px;
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	grid-column: ${(props) => props.column || '2'};
	grid-row: ${(props) => props.row || '3'};
`;

const CardHeader = styled.p`
	font-size: 1rem;
	color: #192a3e;
	grid-column: 1 / 6;
	&.card-link {
		grid-column: 11 / 14;
	}
`;

const HeaderRow = styled.nav`
	padding: 0 16px;
	display: grid;
	grid-template-columns: repeat(8, 40px 16px);
	border-bottom: 1px solid #b0b8bc;
	height: 56px;
	grid-column: 1 / span 16;
`;

const IconButton = styled.button`
	height: 24px;
	width: 24px;
	background-color: #fff;
	color: #222f65;
	border: none;
	margin: 16px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	grid-column: 14;
`;

const InputContainer = styled.div`
	padding: 16px 32px 8px 32px;
`;

const Label = styled.label`
	color: #767676;
	margin: 0 auto;
	text-align: left;
	display: flex;
	text-transform: uppercase;
	margin-bottom: 8px;
	font-weight: 700;
	font-size: 1.2rem;
`;

const InputStyle = styled.input`
	width: 384px;
	height: ${(props) => props.height || '40px'};
	border-radius: 8px;
	border: 1px solid #b0b8bc;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
`;

const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	text-align: right;

	& a {
		margin: 0;
	}
`;

const Button = styled.button`
	width: 128px;
	height: 32px;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
	border-radius: 2px;

	border: 1px solid #111b47;
	font-decoration: none;

	&.primary {
		background-color: #111b47;
		color: #fff;
	}

	&.tertiary {
		color: #222f65;
		background-color: #fff;
		border: none;
	}
`;

function QuickEntry(props) {
	return (
		<CardContainerSmall>
			<HeaderRow>
				<CardHeader>Create an entry</CardHeader>
				<CardHeader className='card-link'>Go to Logs</CardHeader>
				<IconButton>
					<img src={next} alt='next' />
				</IconButton>
			</HeaderRow>

			<InputContainer>
				<Label>Title</Label>
				<InputStyle autocomplete='off' placeholder='Short, descriptive title' />
			</InputContainer>

			<InputContainer>
				<Label>Details</Label>
				<InputStyle
					autocomplete='off'
					placeholder='Any additional details...'
					height='80px'
				/>
			</InputContainer>

			<ButtonDiv padding='8px 24px 8px 8px'>
				<Link>
					<Button className='tertiary'>More options</Button>
				</Link>
				<Link>
					<Button className='primary'>Save</Button>
				</Link>
			</ButtonDiv>
		</CardContainerSmall>
	);
}

export default QuickEntry;
