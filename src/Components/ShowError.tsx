import { ErrorMessage } from 'formik';


const ShowError =(props:string)=>{
    console.log(props)
    let errorName:string;
    errorName = props;
    <ErrorMessage name={errorName} />
}
export  default  ShowError;
