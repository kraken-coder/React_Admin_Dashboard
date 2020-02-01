import { blackColor } from '../../../Utils/Colors';
const styles = (theme) => ({
  appbar: {
    backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
      backgroundColor: blackColor(900)
    },
    boxShadow: 'border-box',
    borderBottom: '0',
    marginBottom: '0',
    paddingTop: '10px',
    position: 'absolute',
    border: '0',
    padding: '5px 0',
    transition: 'all 150ms ease 0s',
    maxHeight: '70px',
    display: 'block'
  },
  title: {
    fontSize: '20px',
    color: blackColor(900),
    [theme.breakpoints.down('md')]: {
      color: 'white'
    },
    textTransform: 'capitalize'
  },
  btn: {
    [theme.breakpoints.down('md')]: {
      color: 'white'
    }
  }
});

export default styles;
