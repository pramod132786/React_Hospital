import React from 'react';
import Patientnav from './Patientnav';
import PatientInfo from './PatientInfo';
import MoreInfo from './MoreInfo';


const PatientHome = () => {
    return (
        <div>
           <Patientnav/>
           <PatientInfo/>
           <MoreInfo/>
        </div>
    );
};

export default PatientHome;