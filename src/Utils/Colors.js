//  color imports from material-ui
import deepPurple from '@material-ui/core/colors/deepPurple';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
//  Color Assignment
const primary = deepPurple;
const background = blueGrey;
const secondary = orange;
const black = grey;
//  Exports
export const blackColor = (hue) => black[hue];
export const primaryColor = (hue) => primary[hue];
export const backgroundColor = (hue) => background[hue];

export const secondaryColor = (hue) => secondary[hue];

// export const lightColor = (hue) => {
//   return primary[hue];
// };
