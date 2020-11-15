import React from 'react'
import AlarmIcon from '@material-ui/icons/AddAlarm'
import { IconButton, InputAdornment } from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

interface DateTimePickerProps {
	label?: string
	show: boolean
	onClose: () => void
	selectedDate: Date | null
	handleDateChange: React.Dispatch<React.SetStateAction<MaterialUiPickersDate>>
}

// empty jsx to replace default datepicker input
const comp = () => <div></div>

function CustomDateTimePicker({ show, onClose, selectedDate, handleDateChange }: DateTimePickerProps) {
	return (
		<DateTimePicker
			autoOk
			disableFuture
			open={show}
			onClose={onClose}
			ampm={true}
			value={selectedDate}
			TextFieldComponent={comp}
			onChange={handleDateChange}
			animateYearScrolling={true}
			format={'YYYY-MM-DD HH:mm'}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton>
							<AlarmIcon />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	)
}

export default CustomDateTimePicker
