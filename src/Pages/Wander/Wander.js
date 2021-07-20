import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import TravelMap from "./TravelMap";
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
  wanderHeader: {
    textAlign: "center",
    color: "white",
  },
  subsectionGrid: {
    padding: "2vh 1vw",
    textAlign: "center",
  },
  mapBackground: {
    background: "linear-gradient(0deg, #1D6363 30%, #339898 90%)",
    margin: "auto",
    width: "90%",
    height: "90%",
  },
}));

const Wander = () => {
  const [content, setContent] = useState("");
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root}>
        <Paper square={true} className={classes.paper}>
          <Typography variant="h4" className={classes.wanderHeader}>
            Wander
          </Typography>
        </Paper>
        <Grid item xs className={classes.subsectionGrid}>
          <Paper className={classes.mapBackground}>
            <TravelMap
              setTooltipContent={setContent}
              mapHeight="100%"
              mapWidth="100%"
            />
          </Paper>
          <ReactTooltip>{content}</ReactTooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default Wander;
