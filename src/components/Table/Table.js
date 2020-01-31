import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { secondaryColor } from './../../Utils/Colors';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: secondaryColor(500),
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(task, request, completed, priority) {
  return { task, request, completed, priority };
}

const rows = [
  createData('Change Logs', '#012', 'true', 'High'),
  createData('Send Documents', '#568', 'false', 'Medium'),
  createData('Finalize Deal With HR', '#780', 'true', 'Low'),
  createData('Cha', '#420', 'true', 'High')
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const Tables = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Task</StyledTableCell>
            <StyledTableCell align='right'>Status</StyledTableCell>
            <StyledTableCell align='right'>Request No</StyledTableCell>
            <StyledTableCell align='right'>Priority</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.request}>
              <StyledTableCell component='th' scope='row'>
                {row.task}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.completed}</StyledTableCell>
              <StyledTableCell align='right'>{row.request}</StyledTableCell>
              <StyledTableCell align='right'>{row.priority}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
