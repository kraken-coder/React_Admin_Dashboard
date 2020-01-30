import {
  primaryColor,
  blackColor,
  secondaryColor
} from '../../../Utils/Colors';
import { boxShadow } from '../../../Utils/boxShadow';
const drawerWidth = 260;

console.log(boxShadow(10, 10, '#0000'));
const styles = (theme) => ({
  drawer: {
    width: drawerWidth,
    boxShadow: boxShadow(0, 10, 10, '#0000')
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    zIndex: '1',
    backgroundColor: primaryColor(500),
    overflow: 'hidden',

    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'fixed',
      height: '100%'
    }
  },

  toolbar: theme.mixins.toolbar,
  listwrapper: {
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: '260px',
    zIndex: '4'
  },

  navLink: {
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: 'black'
    }
  },

  activelistItem: {
    width: 'auto',
    transition: 'all 300ms linear',
    margin: '10px 15px 0',
    borderRadius: '3px',
    position: 'relative',
    padding: '10px 25px',
    display: 'flex',
    boxShadow: boxShadow(5, 4, 2, '#b39ddb'),
    backgroundColor: primaryColor(100)
  },
  listItem: {
    width: 'auto',
    transition: 'all 300ms linear',
    margin: '5px 20px 0',
    borderRadius: '3px',
    position: 'relative',
    padding: '5px 15px',
    display: 'flex',
    backgroundColor: 'transparent',
    color: 'white'
  },
  listText: {
    textDecoration: 'none',
    margin: '0'
  },
  list: {
    marginTop: '20px',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    listStyle: 'none',
    position: 'unset'
  },
  icon: {
    width: '24px',
    height: '30px'
  },
  topInfo: {
    display: ' block',
    justifyContent: 'center',
    padding: 'auto',
    margin: ' 0.8em auto',
    color: 'white'
  },
  topInfoItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
});

export default styles;
