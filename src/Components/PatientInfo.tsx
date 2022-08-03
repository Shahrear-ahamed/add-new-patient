import React from 'react';
import {Field, Form, Formik} from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import {Button,Stack} from "@mui/material";
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
                    <label htmlFor="name" className="important-field">First Name</label>
                    <Field id="name" name="name" placeholder="Enter Name" />
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
