import React from 'react';
import {Field, Form, Formik} from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as yup from  "yup";
import "yup-phone"
import ShowError from "./ShowError";


interface addNewPatientDetails {
    name: string;
    age:string;
    sex: string;
    mobile: string;
    govId: object;
}
const ValidationSchema = yup.object().shape({
    name: yup.string().required("Name is require"),
    age: yup.string().required("Age must be require"),
    sex: yup.string().required("Gender Require"),
    mobile:yup.string().phone('IN'),
})
const PatientInfo = () => {

    const initialValues: addNewPatientDetails = { name: '', age:"", sex:"" , mobile:"", govId:{type:"",cardNo:""}};

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
                    <div>
                        <h4 className="details-title">Patient Details</h4>
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

                            <Grid container spacing={5} sx={{ flexGrow: 1, my:2, ml:0}}>
                                <Grid display="flex" flexDirection='column' justifyContent="flex-start" alignItems="flex-start"  xs={5}>
                                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: "75%" }}>
                                        <label htmlFor="mobile" >Mobile</label>
                                        <Field id="mobile" type="number"  name="mobile" placeholder="Enter Mobile" />
                                    </Box>
                                    <ShowError name="mobile" />
                                </Grid>
                                <Grid display="flex" justifyContent="" alignItems="center" xs={7}>
                                        <label htmlFor="govId">Govt Issued ID</label>
                                        <Grid container spacing={2}  sx={{m:0}} >
                                            <Grid item xs={5}>
                                                <Field as="select" id="govId" name="govId.type" placeholder="Select Id">
                                                    <option value="select id">Select Id</option>
                                                    <option value="nid cart">Nid Card</option>
                                                    <option value="adhar cart">Adhar Cart</option>
                                                    <option value="passport">Passport</option>
                                                </Field>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <Field id="govId" name="govId.cardNo" placeholder="Enter Govt ID" />
                                            </Grid>
                                        </Grid>
                                </Grid>
                            </Grid>
                    </div>

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

                    {/*// contact details are here*/}

                </Form>
            </Formik>
        </Box>
    );
};

export default PatientInfo;
