import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

const ButtonsCom = () => {
    return (
        <Box>
            <Typography variant="h4" align="center" my={3}>
                This is a Button section
            </Typography>
            <Stack spacing={3} mt={2} direction="row" justifyContent="center">
                <Button variant="text" >Only text btn</Button>
                <Button variant="contained" color="error">Container btn</Button>
                <Button variant="outlined" color="success">Outline Btn</Button>
                <Button variant="outlined" disabled>Disabled</Button>
                <Button variant="outlined"  href="/home">Link btn</Button>
            </Stack>
        </Box>
    );
};

export default ButtonsCom;
