import React, { useContext } from 'react';

import classes from './UserToolbar.module.css';
import NewAppointmentToolbarItemView from './NewAppointmentToolbarItemView/NewAppointmentToolbarItemView';
import MyAccountToolbarItemView from './MyAccountToolbarItemView/MyAccountToolbarItemView';
import UIStateContext from '../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../common/UserAuthType';

const UserToolbar = () => {
    const uiStateContext = useContext(UIStateContext);
    return (
        <div className={classes.Toolbar}>
            <div className={classes.RightItems}>
                <NewAppointmentToolbarItemView />
                {uiStateContext.userAuthStatus !== UserAuthType.UNAUTHENTICATED? 
                        <MyAccountToolbarItemView /> : null
                }
            </div>
        </div>
    );
}
export default UserToolbar;