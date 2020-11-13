import React from 'react'
import { AlertProps } from '@material-ui/lab/Alert'

import { StyledSnackBar, StyledAlert } from './styles'
interface SnackBarProps extends AlertProps {
	open: boolean
	message: string
	onClose: () => void
	severity?: 'error' | 'success'
}

function Alert(props: AlertProps) {
	return <StyledAlert elevation={2} {...props} />
}

export default function SnackBar({ open, message, onClose, severity }: SnackBarProps) {
	return (
		<StyledSnackBar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			style={{ marginTop: 50 }}
			autoHideDuration={120000000}
			open={open}
			message={message}
			onClose={onClose}
		>
			<Alert severity={severity}>{message}</Alert>
		</StyledSnackBar>
	)
}
