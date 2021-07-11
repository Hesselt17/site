import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    //height: "20vh",
    padding: theme.spacing(15),
    //margin: "0 auto",
    background: "linear-gradient(0deg, #e8e8e8 30%, #bababa 90%)",
  },
  dividerLine: {
    margin: "auto",
    height: "2vh",
    width: "85vw",
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Grid>
          <Paper className={classes.paper}>About Me</Paper>
          <Grid container justifyContent="center">
            <Typography>Early Life</Typography>
            <Divider className={classes.dividerLine} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutMe;
