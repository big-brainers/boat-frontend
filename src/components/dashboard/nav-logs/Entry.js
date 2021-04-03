import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const EntryDiv = styled.div`
	background: #fff;
	padding: 0 8px 8px 8px;
	width: 70vw;
	margin: 16px;

	& p {
		font-size: 1.1em;
		margin-bottom: 10px;
		white-space: pre-wrap;
		word-wrap: break-all;
	}

	& button {
		position: relative;
		float: right;
		margin-right: 10px;
		background-color: #fff;
		color: #222f65;
		border: none;
		width: 36px;
		height: 36px;
		cursor: pointer;
		outline: none;
	}
`;

const HeaderRow = styled.div`
	padding: 0 16px 16px 16px;
	border-bottom: ${(props) => props.bottom || '1px solid #b0b8bc'};
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: ${(props) => props.justify || 'space-between'};
`;

const Label = styled.h6`
	color: #767676;
	text-transform: uppercase;
	margin-bottom: 8px;
	font-weight: 700;
	font-size: 1.2rem;
`;

function Entry(props) {
	// let timestamp = '2021-04-02T19:36:44.090Z'; //print like this? or stringify ?

	function handleClick() {
		props.onDelete(props.id);
	}
	return (
		<EntryDiv>
			<HeaderRow>
				<Label>{props.title}</Label>
				<Label>{props.date}</Label>
			</HeaderRow>
			<p>{props.content}</p>
			<button onClick={handleClick}>
				<DeleteIcon />
			</button>
		</EntryDiv>
	);
}

export default Entry;
