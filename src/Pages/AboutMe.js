import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  paper: {
    left: 0,
    margin: "0 auto",
    padding: theme.spacing(20),
    width: "100%",
    background: "linear-gradient(0deg, #e8e8e8 30%, #bababa 90%)",
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Paper className={classes.paper}>About Me</Paper>
      </div>
    </div>
  );
};

export default AboutMe;
