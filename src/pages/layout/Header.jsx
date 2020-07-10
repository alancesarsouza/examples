import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Box from '../../components/styles/Box';
import Typography from '../../components/styles/Typography';

const Header = ({ title }) => (
  <Box.Header display='flex' justifyContent='space-evenly'  >
    <Link to='/'>
      <Typography variant='h2'>
        {title}
      </Typography>
    </Link>
  </Box.Header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
