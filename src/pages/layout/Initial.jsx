import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/styles/Box';
import Header from './Header';

import { messages } from '../../config/constants';
import { backgroundColor } from 'styled-system';

const Initial = ({ children }) => (
  <>
    <Header title={messages.start.title} />
    <Box
      display='flex'
      p={4}
      borderRadius={4}
      style={{backgroundColor: 'red'}}
    >
      {children}
    </Box>
  </>
);

Initial.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Initial;
