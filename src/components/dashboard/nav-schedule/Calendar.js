import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import GoToSchedule from './GoToSchedule';
import CalendarCard from './CalendarCard';

const Frame = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	width: 635px;
	height: 968px;
`;
const Header = styled.header`
	position: fixed;
	background-color: #f2f2f2;
	color: #222f65;
	margin: 0 auto;
	padding: 16px 24px;
	display: flex;
	flex-grow: 3;
	width: 100vw;
	align-items: center;
	justify-content: space-between;
	height: 72px;
	font-size: 1rem;
`;

const Footer = styled.footer`
	position: fixed;
	display: block;
	bottom: 0;
	background-color: #f2f2f2;
	color: #222f65;
	height: 100px;
	width: 100vw;
	text-align: center;
	padding-top: 45px;
	background: #ffffff;
	border: 1px solid #e8e8e8;

	.footer-text {
		display: inline-block;
		color: #222f65;
		padding: 0 4px;
	}
`;

const Body = styled.div`
	width: 100vw;

	display: block;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	background-color: #f2f2f2;
	color: #222f65;
`;

const Day = styled.div`
	width: 14.2%;
	display: flex;
	height: 60px;
`;
const Button = styled.div`
	cursor: pointer;
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
		// NOT DEFINED- Return to work on this
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
		<Frame>
			<Header>
				<h3>Calendar</h3>
				<GoToSchedule />
				<Button onClick={() => setDate(new Date(year, month - 1, day))}>
					Last
				</Button>
				<Button onClick={() => setDate(new Date(year, month + 1, day))}>
					Next
				</Button>
			</Header>
			<Body>
				{DaysOfTheWeek.map((d) => (
					<Day key={d}>
						<strong>{d}</strong>
					</Day>
				))}
				{Array(days[month] + (startDay - 1))
					.fill(null)
					.map((_, index) => {
						const d = index - (startDay - 2);
						return (
							<Day
								key={index}
								isToday={d === today.getDate()}
								isSelected={d === day}
								onClick={() => setDate(new Date(year, month, d))}>
								{d > 0 ? d : ''}
							</Day>
						);
					})}
			</Body>
			<Footer>
				<CalendarCard />
			</Footer>
		</Frame>
	);
}

export default Calendar;
