import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexShrink: 1,
  },
  paper: {
    padding: theme.spacing(10),
    background: "linear-gradient(0deg, #e8e8e8 30%, #bababa 90%)",
  },
  subsectionGrid: {
    padding: "2vh 1vw",
  },
  dividerLine: {
    height: "1vh",
    background: "linear-gradient(270deg, #e8e8e8 30%, #bababa 90%)",
  },
  description: { fontSize: "0.85rem" },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Grid className={classes.root}>
          <Paper className={classes.paper}>About Me</Paper>
          <Grid container className={classes.subsectionGrid}>
            <Grid item xs>
              <Typography>Bio</Typography>
            </Grid>
            <Grid item xs={10} sm={11} style={{ margin: "auto" }}>
              <Divider className={classes.dividerLine} />
            </Grid>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={10} sm={11}>
                <Typography className={classes.description}>
                  Tommy Hessel was born on February 14th, 1999. Tommy Hessel was
                  born on February 14th, 1999. Tommy Hessel was born on February
                  14th, 1999.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutMe;
