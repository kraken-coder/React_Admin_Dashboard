import React from 'react';
import PropTypes from 'prop-types';

//  @@material Ui helpers

import { makeStyles } from '@material-ui/core/styles';
// import @materail Ui Core  components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

// @material colors

import { primaryColor, secondaryColor, blackColor } from '../../Utils/Colors';

import PhoneLocked from '@material-ui/icons/PhoneLocked';
//  importing card styles
import styles from '../../assets/Styles/components/card';
const useStyles = makeStyles(styles);
const CardAdmin = (props) => {
  const { color, title, num, growth } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        className={classes.iconContainer}
        style={{
          backgroundColor: color
        }}
      >
        <PhoneLocked className={classes.icon} />
      </div>
      <Card className={classes.root}>
        <CardHeader
          title={title}
          className={classes.heading}
          style={{
            textAlign: 'center'
          }}
        />

        <CardContent>
          <h2 className={classes.nums}>{num}</h2>

          <div className={classes.small}>{growth}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardAdmin;
