import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))


const StackCom = () => {
    return (
        <Box sx={{ width: '600px', mx:"auto", mt:4 }}>
            <Typography variant="h5" align="center" my={3}>
                This is Stack and Divider section
            </Typography>
            <Stack direction="row" spacing={3} mt={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={3} mt={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" spacing={3} mt={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" divider={<Divider orientation="vertical" flexItem/>} spacing={3} mt={2}>
                {/*for flex row items divider needs orientation and flexItem property*/}
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Stack spacing={3} divider={<Divider />} mt={2}>
                {/*but only for column items no need to orientation and flexItems property*/}
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
        </Box>
    );
};

export default StackCom;
