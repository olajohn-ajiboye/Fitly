import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Typography } from '@material-ui/core'

import scale from '../../assets/bench.svg'
import height from '../../assets/height.svg'
import diet from '../../assets/healthy.svg'
import healthy from '../../assets/roast-turkey.svg'
import bench from '../../assets/bench.svg'
import Icon from '../Styled/Icons'

// methods
import { currentUser } from '../../features/auth'

// styles
import { useStyles, StyledLink } from './styles'

const SideBar = () => {
	const { root, title, typo } = useStyles()
	const displayName = useSelector(currentUser)?.display_name
	const photoURL = useSelector(currentUser)?.photo_url

	return (
		<nav className={root}>
			<div className={title}>
				<Typography variant="h6" className={typo}>
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
	)
}

export default SideBar
