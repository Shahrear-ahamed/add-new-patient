import React from 'react';
import { useFormik } from 'formik';

const PatientInfo = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            name: '',
            age:''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <section>
            <form onSubmit={formik.handleSubmit}>
                {/*patient details are here*/}
                <div>
                    <h4>Patient Details</h4>

                    <div>
                        <label htmlFor="name" className="important-field">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <div>
                            <label htmlFor="age" className="important-field">Date of Birth of Age</label>
                            <input id="age" name="age" type="text" placeholder="DD/MM/YYYY or Age in Years" onChange={formik.handleChange} value={formik.values.age}/>
                        </div>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default PatientInfo;
