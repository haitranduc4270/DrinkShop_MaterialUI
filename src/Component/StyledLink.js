import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'black',
    lineHeight: 1.5,
    fontSize: 15,

    '&:hover': {
        color: theme.palette.primary.main,
    }
}));
    
    
