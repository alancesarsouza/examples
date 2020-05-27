import React from 'react';
import { Link } from 'react-router-dom';

import { routes, messages } from '../config/constants';
import Box from '../components/styles/Box';
import Typography from '../components/styles/Typography';

const StartPage = () => (
  <Box backgroundColor='secondary'>
    <Link to={routes.async}>
      <Typography color='primary' variant='button'>{messages.pages.async}</Typography>
    </Link>
  </Box>
);

export default StartPage;
