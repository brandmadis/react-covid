import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { positive, recovered, lastModified, death } }) => {
  if (!positive) {
    return "Loading...";
  }
  return (
    <div className="styles.container">
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.positive)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="body2">
              <CountUp start={0} end={positive} duration={0.7} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastModified).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="body2">
              <CountUp start={0} end={recovered} duration={0.7} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastModified).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recovered cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.death)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="body2">
              <CountUp start={0} end={death} duration={0.7} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastModified).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
