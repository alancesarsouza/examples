import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/styles/Box';
import Header from './Header';

import { messages } from '../../config/constants';

const Initial = ({ children }) => (
  <>
    <Header title={messages.start.title} />
    <Box
      display='flex'
      p={4}
      backgroundColor='gray5'
      borderRadius={4}
    >
      {children}
    </Box>
  </>
);

Initial.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Initial;
