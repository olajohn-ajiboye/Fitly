import React from "react";
import { makeStyles,styled } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  IconButton,
  Typography,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#DADAE0",
    color: '#2A338F',
    height: 50,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#2A338F',
    '&:hover':{
        backgroundColor: '#EF5FA2'
    }
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledButton = styled(Button)({
    backgroundColor: '#EF5FA2',
})

const Appbar = () => {
  const { root, appBar, menuButton, title } = useStyles();

  return (
    <div className={root}>
      <AppBar position="fixed" className={appBar}>
        <Toolbar>
          <IconButton edge="start" className={menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={title}>
            News
          </Typography>
          <StyledButton color="inherit">Login</StyledButton>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
};
export default Appbar;
