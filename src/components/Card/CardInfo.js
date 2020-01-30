import React from 'react';

//  @ material Helpers
import { makeStyles } from '@material-ui/core/styles';
//  importing  material UI core components
import Card from '@material-ui/core/Card';
import {
  DoughnutChart,
  LineChart,
  PieChart,
  ScatterChart,
  HorizontalChart,
  RadarChart,
  BubbleChart
} from './../../Layout/Graph';

// external Styling
import styles from '../../assets/Styles/components/card';

// const charts = [DoughnutChart, LineChart, PieChart];

const chartItem = (type, data) => {
  if (type === 'D') {
    return <DoughnutChart data={data} />;
  }
  if (type === 'P') {
    return <PieChart data={data} />;
  }
  if (type === 'L') {
    return <LineChart data={data} />;
  }
  if (type === 'S') {
    return <ScatterChart data={data} />;
  }
  if (type === 'H') {
    return <HorizontalChart data={data} />;
  }
  if (type === 'B') {
    return <BubbleChart data={data} />;
  }
  if (type === 'R') {
    return <RadarChart data={data} />;
  }
};
const useStyles = makeStyles(styles);

const CardInfo = ({ data, type }) => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <div className={classes.cardInfo}>{chartItem(type, data)}</div>
      </Card>
    </div>
  );
};

export default CardInfo;
