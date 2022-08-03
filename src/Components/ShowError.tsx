import { ErrorMessage } from 'formik';
import React from "react";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";


const ShowError =(props:any)=>{
    return (<Typography component="div" variant="body1">
            <Box sx={{ color: 'error.main' }}>
        <ErrorMessage name={props?.name} />
            </Box>
    </Typography>)
}
export  default  ShowError;
