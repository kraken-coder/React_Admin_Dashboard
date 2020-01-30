import { blackColor } from '../../../Utils/Colors';
const styles = (theme) => ({
  title: {
    fontSize: '12px',
    color: 'black',
    textTransform: 'lowercase'
  },
  search: {
    width: 150,
    '&:hover': {
      width: 250,
      transition: 'all 150ms ease 0s'
    }
  },

  searchIcon: {
    color: blackColor(900),
    width: 30,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeColor: {
    color: 'red'
  },
  notificationIcon: {
    color: 'black'
  },
  containerItem: {
    margin: '0 10px 0 10px'
  },
  card: {
    height: '500px'
  }
});

export default styles;
