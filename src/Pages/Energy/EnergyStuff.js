import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexShrink: 1,
  },
  paper: {
    padding: theme.spacing(9),
    background: "linear-gradient(0deg, #339898 30%, #1D6363 90%)", //e8e8e8  bababa
  },
  energyHeader: {
    textAlign: "center",
    color: "white",
  },
}));

const EnergyStuff = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root}>
        <Paper square={true} className={classes.paper}>
          <Typography variant="h4" className={classes.energyHeader}>
            Energy
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default EnergyStuff;
