import React from 'react';
import {Field, Form, Formik} from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as Yup from  "yup";


interface addNewPatientDetails {
    name: string;
    age:string;
}
const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is require")
})
const PatientInfo = () => {

    const initialValues: addNewPatientDetails = { name: '', age:"" };

    return (
        <section className="details-div">

            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <Box sx={{ flexGrow: 1}}>
                        <Grid container spacing={5}>
                            <Grid display="flex" justifyContent="center" alignItems="center" item xs={5}>
                                <label htmlFor="name" className="important-field">First Name</label>
                                <Field id="name"  name="name" placeholder="Enter Name" />
                            </Grid>

                            <Grid display="flex" justifyContent="center" alignItems="center" item xs={4}>
                                    <label htmlFor="age" className="important-field">Date of Birth or Age</label>
                                    <Field id="age" name="age" placeholder="DD/MM/YYYY or Age in Years" />
                            </Grid>
                            <Grid display="flex" justifyContent="center" alignItems="center" item xs={3}>
                                <label htmlFor="sex" className="important-field">Sex</label>
                                <Field as="select" id="sex" name="sex" placeholder="Enter Sex">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
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
        </section>
    );
};

export default PatientInfo;
