// importing  Routes components
import Task from './views/Task/Task';
import DashBoard from './views/DashBoard/DashBoard';
import Profile from './views/Profile/Profile';

//  importing  Materual Icons

import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const routes = [
  {
    component: DashBoard,
    layout: '/admin',
    path: '/dashboard',
    name: 'Dashboard',
    icon: HomeIcon
  },
  {
    component: Profile,
    layout: '/admin',
    path: '/profile',
    name: 'Profile ',
    icon: AccountBoxIcon
  },
  {
    component: Task,
    layout: '/admin',
    path: '/tasks',
    name: 'Tasks',
    icon: AccessAlarmIcon
  }
];

export default routes;
