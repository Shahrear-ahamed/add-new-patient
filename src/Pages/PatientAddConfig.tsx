import * as yup from "yup";

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

export interface FormikInputTypes {
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

export const InitialValues: FormikInputTypes = {
    name: "",
    age: "",
    sex: "",
    mobile: "",
    govId: { type: "", cardNo: "" },
    guardianInfo: { relation: "", guardianName: "" },
    email: "",
    emergencyContact: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    maritalStatus: "",
    bloodGroup: "",
    nationality: "",
};

const bdInNumber = /^(?:\+88|88)?(01[3-9]\d{8})|(?:(?:\+|0{0,2})91(\s*-\s*)?|0?)?[789]\d{9}$/;
export const ValidationSchema = yup.object({
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

export  const FromConfig = [
   [
        {
            label: "First Name",
            label_grid_xs: 5,
            input_grid_xs: 0,
            input_right_grid_xs: 0,
            input_component: "TEXT",
            name: "name",
            placeholder: "Enter Name",
            required: true,
            type: "text",
        }
   ],
]
