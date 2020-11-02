import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

// components
import Icon from '../Styles/Icons'
import WorkOut from '../../features/dataEntry/Workouts'
import Weight from '../../features/dataEntry/Weight'
import Diet from '../../features/dataEntry/Diet'
import Fast from '../../features/dataEntry/Fast'
import { TabPanel } from './TabPanel'

// icons
import balance from '../../assets/balance.svg'
import diet from '../../assets/roast-turkey.svg'
import fast from '../../assets/carrot.svg'
import workout from '../../assets/bench.svg'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		height: '60vh',
		'& img': {
			height: 25,
			width: 25,
			margin: 5,
		},
		'& .MuiTab-root': {
			textTransform: 'capitalize',
		},
		'& .MuiTabs-scrollable': {
			justifyContent: 'space-evenly',
		},
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		textTransform: 'capitalize',
		color: 'rgb(198, 211, 231)',
	},
}))

function a11yProps(index: any) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	}
}

export default function VerticalTabs() {
	const classes = useStyles()
	const theme = useTheme()
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue)
	}

	const handleChangeIndex = (index: number) => {
		setValue(index)
	}

	return (
		<Paper className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				<Tab label="Weight" icon={<Icon src={balance} alt="diet" />} {...a11yProps(0)} />
				<Tab label="Diet" icon={<Icon src={diet} alt="diet" />} {...a11yProps(1)} />
				<Tab label="Fast" icon={<Icon src={fast} alt="fast" />} {...a11yProps(2)} />
				<Tab label="Workout" icon={<Icon src={workout} alt="workout" />} {...a11yProps(3)} />
				<Tab label="Diet" icon={<Icon src={balance} alt="diet" />} {...a11yProps(4)} />
				<Tab label="Diet" icon={<Icon src={balance} alt="diet" />} {...a11yProps(4)} />
			</Tabs>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0}>
					<Weight />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<WorkOut />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Diet />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Fast />
				</TabPanel>
				<TabPanel value={value} index={4}>
					Item Five
				</TabPanel>
			</SwipeableViews>
		</Paper>
	)
}
