import React from 'react';
import './global.css'
import AddNewPatient from "./Components/AddNewPatient";
import PatientInfo from "./Components/PatientInfo";

function App() {
  return (
    <div className="wrapper">
        <AddNewPatient />
        <PatientInfo />
    </div>
  );
}

export default App;
