import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { StyledLink } from '../../Component/StyledLink';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar = function () {
    return (
        <Box sx={{
            display: 'flex',
            height: '90px',
            px: '10%',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: 2,
            borderBottom: 2,
            borderColor: 'primary.main',
            boxSizing: 'border-box',
        }}>
            <Box display= 'flex'>
                <Box display= 'flex'>
                    <Typography sx={{
                        m: 'auto',
                        mr: '40px',
                        fontWeight: 600,
                        fontSize: 25,
                        color: 'primary.main',
                        fontFamily: 'Courier New, Courier, monospace',
                    }}>
                        `pure flave
                    </Typography>
                </Box>
                <Box sx={{ 
                    display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'},
                }} >
                    <StyledLink href='/' mx={15} my='auto'>Shop</StyledLink>
                    <StyledLink href='/' mx={15} my='auto'>Subcription</StyledLink>
                    <StyledLink href='/' mx={15} my='auto'>About us</StyledLink>
                    <StyledLink href='/' mx={15} my='auto'>Contact</StyledLink>
                </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' width='20%'>
                <Button startIcon={<AccountCircleIcon/>} variant='text' size='large'>Log in</Button>
                <Button startIcon={<ShoppingCartIcon/>} variant='text' size='large'></Button>
            </Box>
        </Box>
    )
}