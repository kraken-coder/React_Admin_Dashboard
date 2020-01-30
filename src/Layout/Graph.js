import React from 'react';
import {
  Bar,
  HorizontalBar,
  Pie,
  Doughnut,
  Line,
  Polar,
  Scatter,
  Radar,
  Bubble
} from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/Styles/components/card';
const useStyles = makeStyles(styles);

export const LineChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInner}>
      <Line
        data={props.data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
};

export const DoughnutChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInner}>
      <Doughnut
        data={props.data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
};
export const PieChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInner}>
      <Pie
        data={props.data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
};
export const PolarChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInner}>
      <Polar
        data={props.data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
};
export const ScatterChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInner}>
      <Scatter
        data={props.data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
};
export const HorizontalChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInner}>
      <HorizontalBar
        data={props.data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
};
export const RadarChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInner}>
      <Radar
        data={props.data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
};
export const BubbleChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardInner}>
      <Bubble
        data={props.data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits'
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );
};
