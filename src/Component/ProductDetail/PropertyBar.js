import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import React from 'react';

const PropertyLayout = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    marginBottom: 15,
    columnGap: 10,
    rowGap: 10,

    '& button': {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.dark,
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: 'inherit',

        '&:focus': {
            borderColor: theme.palette.primary.light,
        }
    },

    '& p': {
        fontWeight: 'bold',
        color: theme.palette.primary.dark,
        width: 100,
        border: 'none',
        paddingLeft: 0,
        marginTop: 'auto',
        marginBottom: 'auto',
    }
}))

const StateLayout = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'start',
    marginBottom: 30,

    '& p': {
        fontWeight: 'bold',
        color: theme.palette.primary.dark,
        width: 100,
        border: 'none',
        paddingLeft: 0,
        marginTop: 'auto',
        marginBottom: 'auto',
    },

}))
  
export function PropertyBar (props) {
    if(props.type == "state") {
        return (
            <StateLayout>
                <Typography> {props.name} </Typography>
                <Typography>{props.value} </Typography>
            </StateLayout>
        )
    }
    else return (
        
        <PropertyLayout>
            <Typography> {props.name} </Typography>
            {
                props.value.map(value => {
                    return (
                        <Button variant='outlined'> {value} </Button>
                    )
                })
            }
        </PropertyLayout>
    )
}