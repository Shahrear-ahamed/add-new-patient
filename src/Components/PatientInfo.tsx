import React from 'react';
import {Field, Form, Formik} from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as Yup from  "yup";
import ShowError from "./ShowError";


interface addNewPatientDetails {
    name: string;
    age:string;
    sex: string;
}
const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is require"),
    age: Yup.string().required("Age must be require"),
    sex: Yup.string().required("Gender Require")
})
const PatientInfo = () => {

    const initialValues: addNewPatientDetails = { name: '', age:"", sex:"" };

    return (
        <Box sx={{ boxShadow: 3,borderRadius: 2, p:2 }}>

            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <h4 className="details-title">Patient Details</h4>
                    <Box sx={{ flexGrow: 1}}>
                        <Grid container spacing={5}>
                            <Grid display="flex" flexDirection='column' justifyContent="" alignItems="center" item xs={5}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: 1 }}>
                                    <label htmlFor="name" className="important-field">First Name</label>
                                    <Field id="name"  name="name" placeholder="Enter Name" />
                                </Box>
                                <ShowError name="name" />
                            </Grid>
                            <Grid display="flex" flexDirection='column' justifyContent="" alignItems="center" item xs={4}>
                                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: 1 }}>
                                        <label htmlFor="age" className="important-field">Date of Birth or Age</label>
                                        <Field id="age" name="age" placeholder="DD/MM/YYYY or Age in Years" />
                                    </Box>
                                <ShowError name="age" />
                            </Grid>
                            <Grid display="flex" flexDirection='column' justifyContent="" alignItems="center" item xs={3}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: 1 }}>
                                    <label htmlFor="sex" className="important-field">Sex</label>
                                    <Field as="select" id="sex" name="sex" placeholder="Enter Sex">
                                        <option value="">Choose one</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Field>
                                </Box>
                                <ShowError name="sex" />
                            </Grid>
                        </Grid>
                    </Box>
                    <button type="submit">Submit</button>
                    <div className="buttons-div">
                        <Stack direction="row" spacing={2}>
                            <Button type="submit"  variant="outlined" startIcon={<DeleteIcon />}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="success" endIcon={<SendIcon />}>
                                Submit
                            </Button>
                        </Stack>
                    </div>
                </Form>
            </Formik>
        </Box>
    );
};

export default PatientInfo;
