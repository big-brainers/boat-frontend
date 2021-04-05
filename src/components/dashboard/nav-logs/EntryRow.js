import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EntryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: row wrap;
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
	margin: 10px auto;
	padding: 0 16px;
	color: #111b47;
	font-size: 1.2rem;
`;

const RowSection = styled.div`
	padding: 0;
	margin: 0;

	&.title-section {
		width: 27%;
		font-weight: 700;
	}
	&.body-section {
		width: 51%;
	}
	&.date-section {
		width: 13%;
	}
	&.icon-section {
		width: 3%;
	}
`;

const RowSectionP = styled.p`
	margin: 0 auto;
	padding: 8px 0;
`;

const EntryRow = (props) => {
	return (
		<EntryContainer>
			<RowSection className='title-section'>
				<Link to={`/logs/${props.index}`}>
					<RowSectionP>{props.title}...</RowSectionP>
				</Link>
			</RowSection>
			<RowSection className='body-section'>
				<RowSectionP>{props.content}...</RowSectionP>
			</RowSection>
			<RowSection className='date-section'>
				<RowSectionP>{props.date}</RowSectionP>
			</RowSection>
		</EntryContainer>
	);
};

export default EntryRow;
