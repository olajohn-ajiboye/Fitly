import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Link, Slide, Paper } from "@material-ui/core";

import { RootState } from "../app/rootReducer";

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
  const user = useSelector((state: RootState) => state.auth.currentUser);
  console.log(user);

  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <Paper onClick={onMobileMenuClick}>
        <nav className={root}>
          <h1>{user?.displayName}</h1>
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
