import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as PatientAddConfig from "./PatientAddConfig";

const PatientAddWithConfig = () => {
    return (
        <div>
            <h4>Patient add with config</h4>
            <Formik
                initialValues={PatientAddConfig}
                onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);}}>
                <Form>
                    <div>
                        <h4 className="details-title">Patient Details</h4>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default PatientAddWithConfig;
