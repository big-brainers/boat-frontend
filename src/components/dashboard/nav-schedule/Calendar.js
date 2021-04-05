import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const CardContainerLarge = styled.div`
	background: #ffffff;
	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	height: 90vh;
	width: 635px;
	grid-column: 4;
	grid-row: 1;
	margin-top: 16px;
`;

const CardHeader = styled.p`
	font-size: 1rem;
	color: #192a3e;

	&.card-link {
		grid-column: 11 / 14;
	}
`;

const HeaderRow = styled.nav`
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
	height: 56px;
	grid-column: 1 / span 16;
`;

const Body = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	background-color: #fff;
	color: #222f65;
`;

const Day = styled.div`
	width: 14.2%;
	height: 96px;
	display: flex;
	margin: 0 auto;
	justify-content: flex-end;

	font-size: 1.8rem;

	&:hover {
		background-color: #e1effa;
		opacity: 0.5;
	}
`;

const Number = styled.p`
	padding: 8px;
`;

const HeaderSix = styled.h6`
	font-size: 1.5rem;
	color: #505f98;
	line-height: 2.2rem;
	display: inline-block;
	margin: ${(props) => props.margin || '24px auto'};
`;

const WeekDiv = styled.div`
	width: 14.2%;
	display: flex;
	height: 60px;
	margin: 0 auto;
`;

const WeekdaysDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid #ffd166;
`;

function Calendar() {
	const Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const DaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const DaysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const Months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const today = new Date();
	const [date, setDate] = useState(today);
	const [day, setDay] = useState(date.getDate());
	const [month, setMonth] = useState(date.getMonth());
	const [year, setYear] = useState(date.getFullYear());
	const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

	useEffect(() => {
		setDay(date.getDate());
		setMonth(date.getMonth());
		setYear(date.getFullYear());
		setStartDay(getStartDayOfMonth(date));
	}, [date]);

	function getStartDayOfMonth(date: Date) {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	}

	function isLeapYear(year: number) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	const days = isLeapYear(date.getFullYear()) ? DaysLeap : Days;

	return (
		<CardContainerLarge>
			<HeaderRow>
				<CardHeader>Schedule</CardHeader>
				<HeaderSix margin='0'>{Months[month]}</HeaderSix>
			</HeaderRow>
			<div>
				<WeekdaysDiv>
					{DaysOfTheWeek.map((d) => (
						<WeekDiv key={d}>
							<HeaderSix>{d}</HeaderSix>
						</WeekDiv>
					))}
				</WeekdaysDiv>
				<Body>
					{Array(days[month] + (startDay - 1))
						.fill(null)
						.map((_, index) => {
							const d = index - (startDay - 2);
							return (
								<Day key={index} isToday={d === today.getDate()}>
									<Number>{d > 0 ? d : ''}</Number>
								</Day>
							);
						})}
				</Body>
			</div>
		</CardContainerLarge>
	);
}

export default Calendar;
