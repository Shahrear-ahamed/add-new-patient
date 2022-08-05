import React from 'react';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



let theme = createTheme()
theme = responsiveFontSizes(theme)
const TypographyText = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h2" sx={{mb: 2}}>
                This is Typography section and also responsive
            </Typography>
            <Typography variant="subtitle1" component="h2">
                This is subtitle style but tag is h2
            </Typography>
            <Typography variant="subtitle2" mt={2}>
                This is my first typography text in Material ui - this is subtitle 2
            </Typography>

        </ThemeProvider>
    );
};

export default TypographyText;
