import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'
import { makeStyles, styled } from '@material-ui/core/styles'
import { Avatar, Slide, Paper, Typography } from '@material-ui/core'

import scale from '../../assets/scale.svg'
import height from '../../assets/height.svg'
import diet from '../../assets/healthy.svg'
import healthy from '../../assets/roast-turkey.svg'
import bench from '../../assets/bench.svg'
import Icon from '../Styles/Icons'

// methods
import { ADD_FAST } from '../../graphql/mutations'
import { addFastAsync } from '../../features/dataEntry/dataEntrySlice'
import { currentUser } from '../../features/auth'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: theme.spacing(2),
		color: theme.palette.text.secondary,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		'& img': {
			width: 35,
			height: 35,
			margin: 20,
		},
		'& .MuiAvatar-img': {
			display: 'inline-block',
			borderRadius: '50%',
			width: 45,
			height: 45,
		},
	},
	title: {
		display: 'flex',
		alignItems: 'center',
		padding: '10px',
		width: 'calc(100% - 20px)',
	},
	typo: {
		textTransform: 'capitalize',
		marginRight: 5,
		fontWeight: 700,
	},
}))
const StyledLink = styled(Typography)({
	display: 'flex',
	alignItems: 'center',
	paddingLeft: '10px',
	lineHeight: '50px',
	width: 'calc(100% + 10px)',
	fontWeight: 500,
})

interface AppBarProps {
	onMobileMenuClick: () => void
}

const SideBar = ({ onMobileMenuClick }: AppBarProps) => {
	const { root, title, typo } = useStyles()
	const displayName = useSelector(currentUser)?.displayName
	const photoURL = useSelector(currentUser)?.photoURL

	const [addFast] = useMutation<any>(ADD_FAST)
	const dispatch = useDispatch()

	const dispatchFast = async () => {
		const { data } = await addFast()
		if (data) dispatch(addFastAsync(data))
	}

	return (
		<Slide direction="down" in={true} mountOnEnter unmountOnExit>
			<Paper onClick={onMobileMenuClick}>
				<nav className={root}>
					<div className={title}>
						<Typography variant="h6" className={typo} onClick={dispatchFast}>
							{' '}
							{displayName}{' '}
						</Typography>
						<Avatar src={photoURL ?? ''} alt="user" />
					</div>
					<StyledLink variant="body2">
						<Icon src={scale} alt="scale" /> Weight
					</StyledLink>
					<StyledLink variant="body2">
						<Icon src={height} alt="body" /> Body
					</StyledLink>
					<StyledLink variant="body2">
						<Icon src={healthy} alt="healthy" />
						Diet <Icon src={diet} alt="diets" />
					</StyledLink>
					<StyledLink variant="body2">
						<Icon src={bench} alt="workouts" /> Workouts
					</StyledLink>
					<StyledLink variant="body2">
						<Icon src={diet} alt="fasts" />
						Fast
					</StyledLink>
				</nav>
			</Paper>
		</Slide>
	)
}

export default SideBar
