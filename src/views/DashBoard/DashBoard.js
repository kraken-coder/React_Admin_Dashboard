import React from 'react';
// Importing Material UI
import { makeStyles } from '@material-ui/core/styles';

//   importing Core components
import Grid from '@material-ui/core/Grid';
import CardAdmin from '../../components/Card/CardAdmin';
import CardInfo from '../../components/Card/CardInfo';

//  material colors
import { primaryColor, secondaryColor, blackColor } from '../../Utils/Colors';
//  importing graph data
import { data1, data2 } from '../../Variables/GraphData';

// importing Core styles
import styles from '../../assets/Styles/components/card';
import Styled from 'styled-components';
const useStyles = makeStyles(styles);
const DashBoard = () => {
  const classes = useStyles();
  return (
    <>
      <CardContainer>
        <Grid container spacing={4} justify='center'>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            {' '}
            <CardAdmin
              color={primaryColor(500)}
              title={'Requests'}
              num={30}
              growth={'+2.5%'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CardAdmin
              color={secondaryColor(900)}
              title={'Spendings'}
              num={180}
              growth={'-31.8%'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CardAdmin
              color={blackColor(900)}
              title={'Tasks'}
              num={452}
              growth={'+4.9%'}
            />
          </Grid>
        </Grid>
        {/* second section  */}
        <Grid container justify='center' spacing={3}>
          <Grid item xs={12} sm={6} md={5}>
            <CardInfo type={'L'} data={data1} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardInfo type={'D'} data={data2} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardInfo type={'H'} data={data2} />
          </Grid>
        </Grid>
      </CardContainer>
    </>
  );
};

const CardContainer = Styled.div`
margin-bottom:4em ;

`;

export default DashBoard;
