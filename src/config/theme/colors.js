import { rgba, darken } from 'polished';

const blue = '#6B77E5';
const darkblue = '#4954B5';
const lightblue = '#A0A8EE';
const extralightblue = '#DBDEF9';
const pink = '#FF666E';
const lightpurple = '#67568C';
const teal = '#29D0D6';
const yellow = '#FDCE77';
const success = '#2DAE7D';
const warning = '#F7951D';
const danger = '#F4392F';
const black = '#000000';
const white = '#FFFFFF';

const warmgrey = '#B2AEAE';

const coldgrey = '#A6AEBA';

const coldgrey100 = '#F9F9FB';
const coldgrey200 = '#EFF1F5';
const coldgrey300 = '#E4E7EC';
const coldgrey400 = '#CDD2DB';
const coldgrey500 = '#A6AEBA';
const coldgrey600 = '#6F798B';
const coldgrey700 = '#4D5365';
const coldgrey800 = '#3A3C4B';
const coldgrey900 = '#242533';

const application1 = '#006699';
const application2 = '#1a8a9f';
const application3 = '#1177aa';

const application_color = application3;
const applicationDark = darken(application1);

const PRIMARY = application_color;
const HOVER_PRIMARY = applicationDark;

const colors = {
  primary: PRIMARY,
  hover_primary: HOVER_PRIMARY,

  blue,
  darkblue,
  lightpurple,
  pink,

  application_color,
  application2,
  application3,
  applicationDark,
  application1,

  teal,
  yellow,
  success,
  warning,
  danger,
  black,
  white,
  lightblue,
  extralightblue,

  icons: coldgrey500,
  icon: coldgrey600,

  warmgrey,
  coldgrey,
  coldgrey100,
  coldgrey200,
  coldgrey300,
  coldgrey400,
  coldgrey500,
  coldgrey600,
  coldgrey700,
  coldgrey800,
  coldgrey900,

  getOpaqueColor(color, index = 13) {
    const opacity = (index * 0.08) < 1 ? index * 0.08 : 1;
    return rgba(this[color] || color, opacity);
  },
};
export default colors;
