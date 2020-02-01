import React from 'react';
import PropTypes from 'prop-types';

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

const chartItem = (type, data, height) => {
  if (type === 'doughnut') {
    return <DoughnutChart data={data} />;
  }
  if (type === 'pie') {
    return <PieChart data={data} />;
  }
  if (type === 'line') {
    return <LineChart data={data} height={height} />;
  }
  if (type === 'scatter') {
    return <ScatterChart data={data} />;
  }
  if (type === 'horizontal') {
    return <HorizontalChart data={data} />;
  }
  if (type === 'bubble') {
    return <BubbleChart data={data} />;
  }
  if (type === 'radar') {
    return <RadarChart data={data} />;
  }
};
const useStyles = makeStyles(styles);

const CardInfo = ({ data, type, height }) => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <div className={classes.cardInfo}>{chartItem(type, data, height)}</div>
      </Card>
    </div>
  );
};

CardInfo.propType = {
  height: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default CardInfo;
