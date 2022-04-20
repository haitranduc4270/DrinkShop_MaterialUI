import React from 'react';
import { Banner } from '../../Component/Banner';
import { Box } from '@mui/system';
import { NavBar } from './NavBar';

export const Header = function () {
    return (
        <Box>
            <Banner content='FREE SHIPPING ON ORDER OVER $75' height='30px'></Banner>
            <NavBar></NavBar>
        </Box>
    )
}