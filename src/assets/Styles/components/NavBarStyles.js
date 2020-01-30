import { blackColor } from '../../../Utils/Colors';
const styles = (theme) => ({
  appbar: {
    backgroundColor: 'white',
    boxShadow: 'border-box',
    borderBottom: '0',
    marginBottom: '0',
    paddingTop: '10px',
    position: 'absolute',
    border: '0',
    borderRadius: '5px',
    padding: '5px 0',
    transition: 'all 150ms ease 0s',
    maxHeight: '70px',
    display: 'block'
  },
  title: {
    fontSize: '20px',
    color: blackColor(900),
    textTransform: 'capitalize'
  }
});

export default styles;
