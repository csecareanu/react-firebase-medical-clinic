// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCheckUserAccessAllowed from '../common/useCheckUserAccessAllowed';
import AccessNotAllowed from '../../common/AccessNotAllowed/AccessNotAllowed';

const DoctorApptsInfoView = () => {
    if (!useCheckUserAccessAllowed()) {
        return <AccessNotAllowed/>
    }
    return (
        <MainLayout headerType={PageHeaderType.DOCTOR}>
            <h1>Appointments Info Page</h1>
        </MainLayout>
        );
}

export default DoctorApptsInfoView;