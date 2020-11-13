import { styled } from '@material-ui/core/styles'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

export const StyledSnackBar = styled(Snackbar)({
	textAlign: 'center',
	marginBottom: '-40px',
})

export const StyledAlert = styled(MuiAlert)({
	backgroundColor: 'white',
})
