import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'
import { Avatar, Slide, Paper, Typography } from '@material-ui/core'

import scale from '../../assets/bench.svg'
import height from '../../assets/height.svg'
import diet from '../../assets/healthy.svg'
import healthy from '../../assets/roast-turkey.svg'
import bench from '../../assets/bench.svg'
import Icon from '../Styled/Icons'

// methods
import { ADD_FAST } from '../../graphql/mutations'
import { addFastAsync } from '../../features/dataEntry/dataEntrySlice'
import { currentUser } from '../../features/auth'

// styles
import { useStyles, StyledLink } from './styles'

interface AppBarProps {
	onMobileMenuClick: () => void
}

const SideBar = ({ onMobileMenuClick }: AppBarProps) => {
	const { root, title, typo } = useStyles()
	const displayName = useSelector(currentUser)?.display_name
	const photoURL = useSelector(currentUser)?.photo_url

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
