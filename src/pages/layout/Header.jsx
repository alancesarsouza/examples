import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../components/styles/Box';
import Typography from '../../components/styles/Typography';

const Header = () => (
  <Box.Header display='flex' justifyContent='space-evenly'>
    <Link to='/'>
      <Typography variant='h2'>
        Inicio
      </Typography>
    </Link>
  </Box.Header>
);

export default Header;
