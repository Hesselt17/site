import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(15),
    background: "linear-gradient(0deg, #e8e8e8 30%, #bababa 90%)",
  },
  subsectionGrid: {
    padding: "2vh 1vw",
    //padding: theme.spacing(2)
  },
  sectionHeader: {
    paddingRight: "2vw",
  },
  dividerLine: {
    marginTop: "auto",
    marginBottom: "auto",
    height: "1vh",
    width: "80%",
  },
  description: {},
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Grid>
          <Paper className={classes.paper}>About Me</Paper>
          <Grid container className={classes.subsectionGrid}>
            <Typography className={classes.sectionHeader}>
              Early Life
            </Typography>
            <Divider className={classes.dividerLine} />
            <Grid container>
              <Typography></Typography>
              <Typography className={classes.description}>
                Tommy Hessel was born on February 14th, 1999.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutMe;
