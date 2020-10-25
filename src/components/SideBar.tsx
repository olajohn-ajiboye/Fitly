import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

import bench from "./../assets/bench.svg";
import scale from "./../assets/scale.svg";
import height from "./../assets/height.svg";
import diet from "./../assets/healthy.svg";
import healthy from "./../assets/roast-turkey.svg";
import Icon from "./Styles/Icons";
import { Paper } from "@material-ui/core";

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

const SideBar = () => {
  const { root } = useStyles();
  return (
    <Paper>
      <nav className={root}>
        <StyledLink href="#" variant="body2">
          <Icon src={bench} alt="bench" /> Workout
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
  );
};

export default SideBar;
