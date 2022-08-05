// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection

import React,{useState} from 'react';
import {Field, Form, Formik} from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import * as yup from  "yup";
import "yup-phone"
import ShowError from "./ShowError";


// Enum are here
enum Sex {
    Male="Male",
    Female="Female"
}
enum GovtId {
    Nid= "Nid",
    Pass= "Passport",
    Drive="Driving Licence"
}
enum Guardian {
    Father = "Father",
    Mother="Mother",
    Brother = "Brother",
    Sister = "Sister"
}
enum MaritalStatus {
    Married="Married",
    Unmarried="Unmarried",
}
// noinspection SpellCheckingInspection
enum State {
    Aasham = "Aasham",
    Bihar = "Bihar",
    Modda = "Moddha Pradesh",
    Uttar = "Uttar Pradesh"
}

enum ReligionTitle {
    Buddha="Buddha",
    Christian="Christian",
    Hindu="Hindu",
    Islam="Islam",
    other="Other",
}
enum BloodGrp {
    A="A+",
    B="A-",
    C="B+",
    D="B-",
    E="O+",
    F="O-",
    G = "AB+",
    H ="AB-"
}

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

// Snacksbar
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const bdInNumber = /^(?:\+88|88)?(01[3-9]\d{8})|(?:(?:\+|0{0,2})91(\s*-\s*)?|0?)?[789]\d{9}$/
const ValidationSchema = yup.object().shape({
    name: yup.string().required("Name is require"),
    age: yup.string().required("Age must be require"),
    sex: yup.string().required("Gender Require"),
    mobile:yup.string().matches( bdInNumber,"phone number must be BD or IN"),
    guardianInfo: yup.object().shape({
        relation: yup.string(),
        guardianName: yup.string().when("relation",{
            is:(relation:any)=>Object.values(Guardian).includes(relation),
            then:yup.string().required("Input guardian name"),
        })
    }),
    email: yup.string().email(),
    maritalStatus: yup.string().oneOf(Object.values(MaritalStatus)),
})
const PatientInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [result,setResult] = useState<{status: number; message: string}>({ status: 0, message: "", });
    console.log("Server is back ",result)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };

    const initialValues: addNewPatientDetails = { name: '', age:"", sex:"" , mobile:"", govId:{type:"",cardNo:""},guardianInfo:{relation:"",guardianName:""},email:"",emergencyContact:"", address:"",state:"", city:"",country:"",pincode:"",occupation:"",religion:"",maritalStatus:"", bloodGroup:"",nationality:""};

    return (
        <Box sx={{ boxShadow: 3,borderRadius: 2, p:2 }}>

            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                    fetch("http://localhost:5000/send-data",{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setResult(data)
                            if(data.status === 200){
                                return  setIsOpen(true)
                            }
                        })
                        .catch(err => console.log(err.message))
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
                                            <option value="">Select One</option>
                                            {Object.values(Sex).map(sex => <option key={sex} value={sex}>{sex}</option>)}
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
                                                    {Object.values(GovtId).map(id => <option key={id} value={id}>{id}</option>)}
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
                                                <option value="">Select Guardian</option>
                                                {Object.values(Guardian).map(guardianId => <option key={guardianId} value={guardianId}>{guardianId}</option>)}
                                            </Field>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <Field id="guardianInfo" name="guardianInfo.guardianName" placeholder="Enter Guardian Name" style={{width:"100%"}} />
                                            <ShowError name="guardianInfo.guardianName" />
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
                             <Grid item xs={4} sx={{display:"flex", alignItems:"center"}}>
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
                                    {Object.values(State).map(status => <option key={status} value={status}>{status}</option>)}
                                </Field>
                            </Grid>
                            <Grid item xs={3} sx={{display:"flex", alignItems:"center"}}>
                                <label htmlFor="city">City</label>
                                <Field as="select" id="city" name="city">
                                    <option value="">Select City</option>
                                    {Object.values(State).map(status => <option key={status} value={status}>{status}</option>)}
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
                                    {Object.values(ReligionTitle).map(status => <option key={status} value={status}>{status}</option>)}
                                </Field>
                            </Grid>

                              <Grid item xs={3} sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <Box  sx={{display:"flex", alignItems:"center"}}>
                                    <label htmlFor="maritalStatus">Marital Status</label>
                                    <Field as="select" id="maritalStatus" name="maritalStatus">
                                        <option value="">Select One</option>
                                        {Object.values(MaritalStatus).map(status => <option key={status} value={status}>{status}</option>)}
                                    </Field>
                                </Box>
                                  <ShowError name="maritalStatus"/>
                            </Grid>

                              <Grid item xs={3} sx={{display:"flex", alignItems:"center"}}>
                                <label htmlFor="bloodGroup">Blood Group</label>
                                <Field as="select" id="bloodGroup" name="bloodGroup">
                                    <option value="">Select One</option>
                                    {Object.values(BloodGrp).map(status => <option key={status} value={status}>{status}</option>)}
                                </Field>
                            </Grid>

                            <Grid item sx={{display:"flex", alignItems:"center"}} xs={3}>
                                <label htmlFor="nationality">Nationality</label>
                                <Field id="nationality" name="nationality" placeholder="Enter Nationality" />
                            </Grid>

                        </Grid>
                    </div>


                        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                            <Button type="submit"  variant="outlined" endIcon={<DeleteIcon />}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="success" endIcon={<SendIcon />}>
                                Submit
                            </Button>
                        </Stack>
                </Form>
            </Formik>
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {result&& result.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default PatientInfo;
