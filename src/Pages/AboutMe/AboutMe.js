import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, Paper, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexShrink: 1,
  },
  paper: {
    padding: theme.spacing(9),
    background: "linear-gradient(0deg, #339898 30%, #1D6363 90%)", //e8e8e8  bababa
  },
  aboutHeader: {
    textAlign: "center",
    color: "white",
  },
  subsectionGrid: {
    padding: "2vh 1vw",
  },
  dividerLine: {
    height: "1vh",
    background: "linear-gradient(90deg, #339898 30%, #1D6363 90%)",
  },
  description: { fontSize: "0.85rem" },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Grid className={classes.root}>
          <Paper square={true} className={classes.paper}>
            <Typography variant="h4" className={classes.aboutHeader}>
              About Me
            </Typography>
          </Paper>
          <Grid container className={classes.subsectionGrid}>
            <Grid item xs style={{ textAlign: "center" }}>
              <Typography>Biography</Typography>
            </Grid>
            <Grid
              item
              xs={10}
              sm={10}
              style={{ margin: "auto", alignContent: "center" }}
            >
              <Divider className={classes.dividerLine} />
            </Grid>
            <Grid item xs></Grid>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={10} sm={10}>
                <Typography className={classes.description}>
                  Tommy Hessel is a 2021 graduate of Duke University where he
                  studied Computer Science, Energy & the Environment, and
                  Economics. This native Texan is interested in the
                  intersections between all three of these areas and how big
                  data can aid in the transition to a cleaner energy economy. In
                  light of this, he hopes to utlize his incoming work with
                  EY-Parthenon's Software Strategy Group in Boston to learn more
                  about how software interacts with society. At Duke, Tommy
                  worked as an Undergraduate Teaching Assistant for Computer
                  Science 101, was involved with the Duke Student Government
                  (DSG), and helped the Durham community alongside first-years
                  students via Project Build. Tommy enjoys catching up on Bill
                  Gates'reading list, random YouTube videos, traveling through
                  National Parks and distant countries, fly fishing, and all
                  things aviation.
                </Typography>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutMe;
