import React from 'react';
import { render } from 'react-dom';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	WeekView,
	Appointments,
	DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { appointments } from './data';

const theme = createMuiTheme({ palette: { type: 'light', primary: blue } });

const dragDisableIds = new Set([3, 8, 10, 12]);

const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
	if (allowDrag(props.data)) {
		return <Appointments.Appointment {...props} />;
	}
	return (
		<Appointments.Appointment
			{...props}
			style={{ ...props.style, cursor: 'not-allowed' }}
		/>
	);
};

class App extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: appointments,
		};

		this.onCommitChanges = this.commitChanges.bind(this);
	}

	commitChanges({ added, changed, deleted }) {
		this.setState((state) => {
			let { data } = state;
			if (added) {
				const startingAddedId =
					data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			if (changed) {
				data = data.map((appointment) =>
					changed[appointment.id]
						? { ...appointment, ...changed[appointment.id] }
						: appointment
				);
			}
			if (deleted) {
				data = data.filter((appointment) => appointment.id !== deleted);
			}
			return { data };
		});
	}

	render() {
		const { data } = this.state;

		return (
			<MuiThemeProvider theme={theme}>
				<Paper>
					<Scheduler data={data}>
						<EditingState onCommitChanges={this.onCommitChanges} />
						<ViewState currentDate='2021-04-02' />
						<WeekView startDayHour={9} endDayHour={19} excludedDays={[0, 6]} />
						<Appointments appointmentComponent={appointmentComponent} />
						<DragDropProvider allowDrag={allowDrag} />
					</Scheduler>
				</Paper>
			</MuiThemeProvider>
		);
	}
}

render(<App />, document.getElementById('root'));

export default Scheduler;
