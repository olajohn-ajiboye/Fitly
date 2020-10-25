import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Link, Slide, Paper, Typography } from "@material-ui/core";

import { currentUser, isAuth, login, logOut } from "../features/auth";

import bench from "./../assets/bench.svg";
import scale from "./../assets/scale.svg";
import height from "./../assets/height.svg";
import diet from "./../assets/healthy.svg";
import healthy from "./../assets/roast-turkey.svg";
import Icon from "./Styles/Icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#DADAE0",
    "& img ": {
      width: 25,
      height: 25,
      margin: 10,
    },
  },
}));
const StyledLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
  lineHeight: "50px",
  color: "black",
  borderBottom: "1px white solid",
  width: "calc(100% + 10px)",
});

interface AppBarProps {
  onMobileMenuClick: () => void;
}
const SideBar = ({ onMobileMenuClick }: AppBarProps) => {
  const { root } = useStyles();
  const auth = useSelector(isAuth);
  const user = useSelector(currentUser)!;
  console.log(auth);

  const userProfile = () => {
    console.log("user", user);
    return auth && user ? user : null;
  };

  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <Paper onClick={onMobileMenuClick}>
        <nav className={root}>
          <Typography variant="h6">
            {userProfile()?.displayName}
            <Icon src={height} alt="body" />
          </Typography>
          <StyledLink href="#" variant="body2">
            <Icon src={userProfile()?.photoURL ?? ""} alt="bench" /> Workout
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={scale} alt="scale" /> Weight
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={height} alt="body" /> Body
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={healthy} alt="healthy" />
            Body <Icon src={diet} alt="diet" />
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={scale} alt="scale" /> Weight
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={height} alt="body" /> Body
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={diet} alt="diet" /> Weight
          </StyledLink>
        </nav>
      </Paper>
    </Slide>
  );
};

export default SideBar;
