import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

// components
import Icon from '../Styles/Icons';
import WorkOut from '../../features/dataEntry/Workouts';
import Weight from '../../features/dataEntry/Weight';

// icons
// icons
import balance from '../../assets/balance.svg';
import diet from '../../assets/roast-turkey.svg';
import fast from '../../assets/carrot.svg';
import workout from '../../assets/bench.svg';

// types and interfaces
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface CarouselProps {
  children?: React.ReactNode;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& img': {
      height: 25,
      width: 25,
      margin: 0,
    },
  },
}));

export default function ScrollableTabsButtonForce({ children }: CarouselProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='on'
          indicatorColor='primary'
          textColor='primary'
          aria-label='data entry tab'
          orientation='vertical'
        >
          <Tab icon={<Icon src={balance} alt='diet' />} {...a11yProps(0)} />
          <Tab icon={<Icon src={diet} alt='diet' />} {...a11yProps(1)} />
          <Tab icon={<Icon src={fast} alt='fast' />} {...a11yProps(2)} />
          <Tab icon={<Icon src={workout} alt='workout' />} {...a11yProps(3)} />
          <Tab icon={<Icon src={balance} alt='diet' />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Weight />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WorkOut />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Weight />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
}
