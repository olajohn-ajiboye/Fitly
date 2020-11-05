import React from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'

interface SnackBarProps extends AlertProps {
	open: boolean
	message: string
	onClose: any
	severity?: 'error' | 'success'
}

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}
export default function SnackBar({ open, message, onClose, severity }: SnackBarProps) {
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			style={{ marginTop: 20 }}
			autoHideDuration={2000}
			open={open}
			message={message}
			onClose={onClose}
		>
			<Alert severity={severity}>{message}</Alert>
		</Snackbar>
	)
}
