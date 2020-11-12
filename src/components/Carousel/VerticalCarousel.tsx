import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import React from 'react'
import SwipeableViews from 'react-swipeable-views'

// icons
import balance from '../../assets/balance.svg'
import workout from '../../assets/bench.svg'
import fast from '../../assets/carrot.svg'
import diet from '../../assets/roast-turkey.svg'
import Diet from '../../features/dataEntry/Diet/Diet'
import Fast from '../../features/dataEntry/Fast/Fast'
import Weight from '../../features/dataEntry/Weight/Weight'
import WorkOut from '../../features/dataEntry/Workout/Workouts'

// components
import Icon from '../Styled/Icons'
import { TabPanel } from './TabPanel'

// styles
import useStyles from './styles'

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
			</SwipeableViews>
		</Paper>
	)
}
