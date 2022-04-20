import { styled } from '@mui/material/styles';
import React from 'react';

const LayoutCost = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'start',
    fontSize: '30pt',
    fontFamily: theme.typography.fontProduct,
    fontStyle: 'italic',
    color: theme.palette.primary.main,
    marginBottom: 30,
       
    '& p': {
        fontWeight: 50,
        margin: 0,
    }
}))

export function Cost () {
    return (
        <LayoutCost>
            <p>600.000 -</p>
            <p>700.000</p>
        </LayoutCost>
    )
}
