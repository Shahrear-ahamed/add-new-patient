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
    guardianInfo:object;
    email:string;
    emergencyContact:string;
    address:string;
    state:string;
    city:string;
    country:string;
    pincode:string;
    occupation:string;
    religion:string;
    maritalStatus:string;
    bloodGroup:string;
    nationality:string;
}
const ValidationSchema = yup.object().shape({
    name: yup.string().required("Name is require"),
    age: yup.string().required("Age must be require"),
    sex: yup.string().required("Gender Require"),
    mobile:yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"phone number must be BD or IN"),
    email: yup.string().matches(/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address"),
    maritalStatus: yup.string().required("Please select marital status")
})
const PatientInfo = () => {

    const initialValues: addNewPatientDetails = { name: '', age:"", sex:"" , mobile:"", govId:{type:"",cardNo:""},guardianInfo:{relation:"",guardianName:""},email:"",emergencyContact:"", address:"",state:"", city:"",country:"",pincode:"",occupation:"",religion:"",maritalStatus:"", bloodGroup:"",nationality:""};

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
                            <Grid container alignItems="center" columnSpacing={4} sx={{mt:1}}>
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

                            <Grid container spacing={3} sx={{ flexGrow: 1, my:2}}>
                                <Grid display="flex" flexDirection='column' justifyContent="flex-start" alignItems="flex-start" item xs={5}>
                                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: "75%" }}>
                                        <label htmlFor="mobile" >Mobile</label>
                                        <Field id="mobile" type="number"  name="mobile" placeholder="Enter Mobile" />
                                    </Box>
                                    <ShowError name="mobile" />
                                </Grid>
                                <Grid display="flex" justifyContent="" alignItems="center" item xs={7}>
                                        <label htmlFor="govId">Govt Issued ID</label>
                                        <Grid container columnSpacing={2}  sx={{m:0}} >
                                            <Grid item sx={{pt:0}} xs={4}>
                                                <Field as="select" id="govId" name="govId.type" placeholder="Select Id" style={{width:"100%"}}>
                                                    <option value="">Select Id</option>
                                                    <option value="nid cart">Nid Card</option>
                                                    <option value="aadhar cart">Aadhar Cart</option>
                                                    <option value="passport">Passport</option>
                                                </Field>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Field  id="govId" name="govId.cardNo" placeholder="Enter Govt ID" style={{width:"100%"}}/>
                                            </Grid>
                                        </Grid>
                                </Grid>
                            </Grid>
                    </div>

                    {/*// contact details are here*/}
                    <div className="form-div">
                        <h4>Contact Details</h4>
                        <Grid container columnSpacing={3} sx={{mt:1}}>
                            <Grid item sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}} xs={5}>
                                <Box sx={{display:"flex", alignItems:"center", width:1}}>
                                    <label htmlFor="govId">Guardian Details</label>
                                    <Grid container columnSpacing={2}  sx={{m:0}} >
                                        <Grid item sx={{pt:0}} xs={5}>
                                            {/*here is patient guardian relation list*/}
                                            <Field as="select" id="guardianInfo" name="guardianInfo.relation" placeholder="Select Id">
                                                <option value="">Select One</option>
                                                <option value="father">Father</option>
                                                <option value="mother">Mother</option>
                                                <option value="brother">Brother</option>
                                                <option value="sister">Sister</option>

                                            </Field>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <Field id="guardianInfo" name="guardianInfo.guardianName" placeholder="Enter Guardian Name" style={{width:"100%"}} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={3} sx={{display:"flex",flexDirection:"column" , alignItems:"center"}}>
                                <Box sx={{display:"flex" , alignItems:"center"}}>
                                    <label htmlFor="email">Email</label>
                                    <Field id="email" name="email" placeholder="Enter Email" />
                                </Box>
                                <ShowError name="email"/>
                            </Grid>
                             <Grid item xs={4} sx={{display:"flex"}}>
                                <label htmlFor="emergencyContact">Emergency Contact</label>
                                <Field id="emergencyContact" name="emergencyContact" placeholder="Enter Emergency no" />
                            </Grid>
                        </Grid>
                    </div>

                    {/*address details are here*/}
                    <div className="form-div">
                        <h4>Address Details</h4>
                        <Grid container columnSpacing={3} rowSpacing={2} sx={{mt:1}}>
                            <Grid item sx={{display:"flex", alignItems:"center"}} xs={5}>
                                <label htmlFor="address">Address</label>
                                <Field id="address" name="address" placeholder="Enter Address" />
                            </Grid>
                            <Grid item xs={4} sx={{display:"flex" , alignItems:"center"}}>
                                <label htmlFor="state">State</label>
                                <Field as="select" id="state" name="state">
                                    <option value="">Select State</option>
                                    <option value="asham">Asham</option>
                                    <option value="bihar">Bihar</option>
                                    <option value="Bombay">Asham</option>
                                    <option value="uttar pradash">Uttar Prodash</option>
                                </Field>
                            </Grid>
                             <Grid item xs={3} sx={{display:"flex", alignItems:"center"}}>
                                <label htmlFor="city">City</label>
                                 <Field as="select" id="city" name="city">
                                     <option value="">Select city</option>
                                     <option value="asham">Asham</option>
                                     <option value="bihar">Bihar</option>
                                     <option value="Bombay">Asham</option>
                                     <option value="uttar pradash">city Prodash</option>
                                 </Field>
                            </Grid>
                            <Grid item xs={5} sx={{ width: "75%", display:"flex", alignItems:"center" }}>
                                <label htmlFor="country">Country</label>
                                <Field id="country" name="country" placeholder="Enter Country" />
                            </Grid>
                            <Grid item xs={3} sx={{display:"flex", alignItems:"center"}}>
                                <label htmlFor="pincode">Pincode</label>
                                <Field id="pincode" name="pincode" placeholder="Enter Pincode" />
                            </Grid>
                        </Grid>
                    </div>

                    <div className="form-div">
                        <h4>Other Details</h4>
                        <Grid container columnSpacing={3} rowSpacing={2} sx={{mt:1}}>
                            <Grid item sx={{display:"flex", alignItems:"center"}} xs={3}>
                                <label htmlFor="occupation">Occupation</label>
                                <Field id="occupation" name="occupation" placeholder="Enter occupation" />
                            </Grid>
                            <Grid item xs={3} sx={{display:"flex", alignItems:"center"}}>
                                <label htmlFor="religion">Religion</label>
                                <Field as="select" id="religion" name="religion">
                                    <option value="">Select religion</option>
                                    <option value="buddha">Buddha</option>
                                    <option value="christian">Christian</option>
                                    <option value="hindu">Hindu</option>
                                    <option value="islam">Islam</option>
                                    <option value="other">other</option>

                                </Field>
                            </Grid>

                              <Grid item xs={3} sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <Box  sx={{display:"flex", alignItems:"center"}}>
                                    <label htmlFor="maritalStatus">Marital Status</label>
                                    <Field as="select" id="maritalStatus" name="maritalStatus">
                                        <option value="">Select One</option>
                                        <option value="married">Married</option>
                                        <option value="unmarried">Unmarried</option>
                                    </Field>
                                </Box>
                                  <ShowError name="maritalStatus"/>
                            </Grid>

                              <Grid item xs={3} sx={{display:"flex", alignItems:"center"}}>
                                <label htmlFor="bloodGroup">Blood Group</label>
                                <Field as="select" id="bloodGroup" name="bloodGroup">
                                    <option value="">Select One</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">0+</option>
                                    <option value="O-">0-</option>
                                </Field>
                            </Grid>

                            <Grid item sx={{display:"flex", alignItems:"center"}} xs={3}>
                                <label htmlFor="nationality">Nationality</label>
                                <Field id="nationality" name="nationality" placeholder="Enter Nationality" />
                            </Grid>

                        </Grid>
                    </div>


                    <div className="buttons-div">
                        <Stack direction="row" spacing={2}>
                            <Button type="submit"  variant="outlined" endIcon={<DeleteIcon />}>
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
