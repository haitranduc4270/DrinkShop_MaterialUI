import { Typography, Box } from "@mui/material"

export const Banner = function (props) {
    return (
        <Box sx={{
            bgcolor: 'primary.light',
            height: props.height,
            textAlign: 'center',
            border: 0,
            display: 'flex',
        }}>
            <Typography sx={{
                color: 'primary.main',
                m: 'auto',
            }}>
                {props.content ? props.content : 'May be this is content but something wrong'}
            </Typography>
        </Box>
    )

}