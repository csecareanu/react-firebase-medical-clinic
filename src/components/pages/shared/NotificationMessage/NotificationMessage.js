// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './NotificationMessage.module.css';

type Props = {
    typeAccessNotAllowed?: boolean,
    typeNotConnectedToPatientAccount?: boolean
}

const NotificationMessage = (props: Props) => {

    let message = null;

    if (props.typeAccessNotAllowed) {
        message = ( 
            <FormattedMessage 
                id="not_allowed_to_access_resource" 
                defaultMessage={'You are not allowed to access this resource.'}
        /> );
    } else if (props.typeNotConnectedToPatientAccount) {
        message = ( 
            <FormattedMessage 
                id="user_not_connected_to_patient_account" 
                defaultMessage={'You are not connected to a patient account.'}
        /> );
    } else { 
        console.log("NotificationMessage. Unknown message notification message type. Props: ", 
                props);
    }

    return (
        <div className={classes.NowAllowedContent}>
            <h3>
                {message}
            </h3>
        </div>
    );
}

export default NotificationMessage;