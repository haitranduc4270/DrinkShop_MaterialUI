import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';

export function Cost (props) {
    const { cost } = props;
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'start',
            fontSize: '30pt',
            fontFamily: 'typography.fontProduct',
            fontStyle: 'italic',
            color: 'primary.main',
            marginBottom: 30,
            
            '& p': {
                fontWeight: 50,
                margin: 0,
            }
        }}>
            <p>{cost.from + " - "}</p>
            <p>{cost.to}</p>
        </Box>
    )
}
