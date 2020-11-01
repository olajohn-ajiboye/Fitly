import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, styled } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Typography,
  Toolbar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AddTask from '@material-ui/icons/PostAddTwoTone';
import { logOutAsync } from '../../features/auth/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none',
    },
  },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#DADAE0',
    color: '#2A338F',
    height: 50,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#2A338F',
    '&:hover': {
      backgroundColor: '#EF5FA2',
    },
  },
  title: {
    flexGrow: 1,
  },
  logout: {
    textTransform: 'capitalize',
    marginLeft: 20,
  },
}));

const StyledButton = styled(Button)({
  backgroundColor: '#EF5FA2',
  textTransform: 'capitalize',
});

interface AppBarProps {
  onMobileMenuClick: () => void;
}
const HeaderBar = ({ onMobileMenuClick }: AppBarProps) => {
  const { root, appBar, menuButton, title, logout } = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={root}>
      <AppBar position='fixed' className={appBar}>
        <Toolbar>
          <IconButton edge='start' className={menuButton} aria-label='menu'>
            <Hidden>
              {' '}
              <MenuIcon onClick={onMobileMenuClick} />
            </Hidden>
          </IconButton>
          <Typography variant='h6' className={title}></Typography>
          <StyledButton color='inherit'>
            <AddTask />
            <Link to='/data'> Add</Link>
          </StyledButton>
          <StyledButton
            color='inherit'
            className={logout}
            onClick={() => dispatch(logOutAsync())}
          >
            Sign Out
          </StyledButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
export default HeaderBar;
