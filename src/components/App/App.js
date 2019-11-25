// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UIState from '../../react-context/UIState/UIState';

import ClinicMainPage from '../pages/clinic/ClinicMainPage/ClinicMainPage';
import ClinicAboutPage from '../pages/clinic/ClinicAboutPage/ClinicAboutPage';
import ClinicContactPage from '../pages/clinic/ClinicContactPage/ClinicContactPage';
import ClinicDoctorsPage from '../pages/clinic/ClinicDoctorsPage/ClinicDoctorsPage';
import ClinicPricesPage from '../pages/clinic/ClinicPricesPage/ClinicPricesPage';

import UserLogin from '../connect/UserLogin/UserLogin';
import UserLogout from '../connect/UserLogout/UserLogout';

import LogIntoPatientAccount from '../connect/LogIntoPatientAccount/LogIntoPatientAccount';
import LogOutPatientAccount from '../connect/LogOutPatientAccount/LogOutPatientAccount';

import DoctorMain from '../pages/doctor/DoctorMain/DoctorMain';
import DoctorMyAccount from '../pages/doctor/DoctorMyAccount/DoctorMyAccount';
import DoctorApptsInfo from '../pages/doctor/DoctorApptsInfo/DoctorApptsInfo';
import DoctorLogEvents from '../pages/doctor/DoctorLogEvents/DoctorLogEvents';
import DoctorNotificationsMessages from '../pages/doctor/DoctorNotificationsMessages/DoctorNotificationsMessages';
import DoctorWorkingTime from '../pages/doctor/DoctorWorkingTime/DoctorWorkingTime';

import PatientNewAppointment from '../pages/patient/PatientNewAppointment/PatientNewAppointment';
import PatientAccount from '../pages/patient/PatientAccount/PatientAccount';

import SysAdminMain from '../pages/sysAdmin/SysAdminMain/SysAdminMain';
import SysAdminDoctors from '../pages/sysAdmin/SysAdminDoctors/SysAdminDoctors';
import SysAdminDoctorToServices from '../pages/sysAdmin/SysAdminDoctorToServices/SysAdminDoctorToServices';
import SysAdminLogEvents from '../pages/sysAdmin/SysAdminLogEvents/SysAdminLogEvents';
import SysAdminServices from '../pages/sysAdmin/SysAdminServices/SysAdminServices';
import SysAdminSettings from '../pages/sysAdmin/SysAdminSettings/SysAdminSettings';
import SysAdminSpecialties from '../pages/sysAdmin/SysAdminSpecialties/SysAdminSpecialties';


import { 
  ClinicLinkLocationName,
  UserLinkLocationName,
  PatientLinkLocationName,
  DoctorLinkLocationName,
  SysAdminLinkLocationName 
  } from '../../shared/LinkLocationNames';

function App() {
  return (
    <UIState>
      <Switch>
        {/* ClinicLinkLocationName */}
        <Route 
          path={ClinicLinkLocationName.HOME} 
          exact 
          component={ClinicMainPage} />
        <Route 
          path={ClinicLinkLocationName.DOCTORS} 
          component={ClinicDoctorsPage} />
        <Route 
          path={ClinicLinkLocationName.PRICES} 
          component={ClinicPricesPage} />
        <Route 
          path={ClinicLinkLocationName.ABOUT} 
          component={ClinicAboutPage} />
        <Route 
          path={ClinicLinkLocationName.CONTACT} 
          component={ClinicContactPage} />

        {/* UserLinkLocationName */}
        <Route
          path={UserLinkLocationName.LOGIN}
          component={() => (
            <UserLogin navigateToURIOnCancel={ClinicLinkLocationName.HOME} />
            ) } 
        />
        <Route
          path={UserLinkLocationName.LOGOUT} 
          component={UserLogout} />

        {/* PatientLinkLocationName */}
        <Route 
          path={PatientLinkLocationName.NEW_APPOINTMENT} 
          component={PatientNewAppointment} />
        <Route 
          path={PatientLinkLocationName.MY_ACCOUNT} 
          component={PatientAccount} />

        {/* DoctorLinkLocationName */}
        <Route 
          path={DoctorLinkLocationName.LOG_INTO_PATIENT_ACCOUNT} 
          component={LogIntoPatientAccount} />
        <Route 
          path={DoctorLinkLocationName.LOG_OUT_PATIENT_ACCOUNT}  
          component={LogOutPatientAccount} />          
        <Route 
          path={DoctorLinkLocationName.HOME} 
          exact 
          component={DoctorMain} />
        <Route 
          path={DoctorLinkLocationName.MY_ACCOUNT} 
          exact 
          component={DoctorMyAccount} />
        <Route 
          path={DoctorLinkLocationName.APPOINTMENTS} 
          component={DoctorApptsInfo} />
        <Route 
          path={DoctorLinkLocationName.WORKING_TIME} 
          component={DoctorWorkingTime} />
        <Route 
          path={DoctorLinkLocationName.NOTIFICATION_MESSAGES} 
          component={DoctorNotificationsMessages} />
        <Route 
          path={DoctorLinkLocationName.LOG_EVENTS} 
          component={DoctorLogEvents} />

        {/* SysAdminLinkLocationName */}
        <Route 
          path={SysAdminLinkLocationName.HOME} 
          exact 
          component={SysAdminMain} />
        <Route 
          path={SysAdminLinkLocationName.DOCTORS} 
          component={SysAdminDoctors} />
        <Route 
          path={SysAdminLinkLocationName.SPECIALTIES} 
          component={SysAdminSpecialties} />
        <Route 
          path={SysAdminLinkLocationName.SERVICES} 
          component={SysAdminServices} />
        <Route 
          path={SysAdminLinkLocationName.ASSIGN_SERVICES_TO_DOCTOR} 
          component={SysAdminDoctorToServices} />
        <Route 
          path={SysAdminLinkLocationName.LOG_EVENTS} 
          component={SysAdminLogEvents} />
        <Route 
          path={SysAdminLinkLocationName.SETTINGS} 
          component={SysAdminSettings} />
      </Switch>
    </UIState>
 );
}

export default App;
