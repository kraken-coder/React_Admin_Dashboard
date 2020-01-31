import { boxShadow } from '../../../Utils/boxShadow';
import { blackColor } from '../../../Utils/Colors';

const color = blackColor(500);
const styles = (theme) => ({
  root: {
    border: 0,
    borderRadius: '10px',
    boxShadow: boxShadow(10, 14, 5, color),
    minHeight: '8rem',
    display: ' flex',
    justifyContent: 'end',
    alignItems: 'center',
    color: blackColor(600)
  },
  card: {
    maxHeight: '9rem'
  },
  icon: {
    color: 'white',

    fontSize: '5rem'
  },
  container: {
    position: 'relative',
    padding: '1.5em 0.5em 1.5em 0.5em'
  },
  heading: {
    marginTop: '1em'
  },
  iconContainer: {
    padding: '10px',
    position: 'absolute',
    top: '-2%',
    left: '6%',
    borderRadius: '0.5em',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  nums: {
    textAlign: 'center',
    fontSize: '40px'
  },
  small: {
    textAlign: 'center',
    fontSize: '12px'
  },
  cardInfo: {
    // position: 'absolute'
  },
  cardInner: {
    // position: 'absolute',
    // top: '50%',
    // left: '60%'
  }
});

export default styles;
