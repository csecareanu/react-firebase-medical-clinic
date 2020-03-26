// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import BirthdayUserEntryElement 
    from '../../../../../UI/userEntryElement/BirthdayUserEntryElement/BirthdayUserEntryElement';
import FormControl from '../../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../../UI/Button/Button';

type OnSearchPatientsType = (year: number, month: number, day: number) => void;

const onSearchPatients = (onSearchPatientsCallback: OnSearchPatientsType, 
                            year: number, month: number, day: number) => {
    if(onSearchPatientsCallback) {
        onSearchPatientsCallback(year, month, day);
    }
}

type Props = {
    autoFocus?:boolean,
    onSearchPatients: OnSearchPatientsType
}


const SearchPatientByBirthday = (props: Props) => {
    const birthDayLabel = <FormattedMessage id="label_birthday" defaultMessage={'Birthday'}/>
    return (
        <React.Fragment>
            <BirthdayUserEntryElement 
                label={birthDayLabel}
                autoFocus={props.autoFocus? props.autoFocus : false}
            />
            <FormControl.HorizontalSep repeat={2}/>
            <Button 
                type={ButtonType.SUCCESS} 
                fullWidth
                onClick={ () => {
                    onSearchPatients(props.onSearchPatients, 2000, 2,  0)
                }}
            >
                <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
            </Button>
        </React.Fragment>
    );
}

export default SearchPatientByBirthday;