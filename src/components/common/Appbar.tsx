import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Typography,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& a": {
      textDecoration: "none",
    },
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#DADAE0",
    color: "#2A338F",
    height: 50,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#2A338F",
    "&:hover": {
      backgroundColor: "#EF5FA2",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledButton = styled(Button)({
  backgroundColor: "#EF5FA2",
});

interface AppBarProps {
  onMobileMenuClick: () => void;
}
const Appbar = ({ onMobileMenuClick }: AppBarProps) => {
  const { root, appBar, menuButton, title } = useStyles();

  return (
    <div className={root}>
      <AppBar position="fixed" className={appBar}>
        <Toolbar>
          <IconButton edge="start" className={menuButton} aria-label="menu">
            <Hidden>
              {" "}
              <MenuIcon onClick={onMobileMenuClick} />
            </Hidden>
          </IconButton>
          <Typography variant="h6" className={title}></Typography>
          <StyledButton color="inherit">
            <Link to="/login">Login</Link>
          </StyledButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
export default Appbar;
