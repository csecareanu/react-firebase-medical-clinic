// @flow

import * as React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import PatientNewAppointmentView from './PatientNewAppointmentView';


const PatientAccount = () => (
    <NavContainer>
    {
        (navigationData) => (
            <PatientNewAppointmentView
                userAuthStatus={navigationData.userAuthStatus}
                isUserConnectedToAPatientAccount={navigationData.isUserConnectedToAPatientAccount}
            />
        )
    }
    </NavContainer>
)

export default PatientAccount;