import React, { useState } from 'react';
import './SwitchUnit.scss';

export const SwitchUnit = ({ unit }) => {
    const [switchState, setSwitchState] = useState(false);

    const onToggle = () => {
        if (switchState) {
            setSwitchState(false);
            unit('C');
        } else {
            setSwitchState(true);
            unit('F');
        }
    };

    return (
        <div className="switch-unit">
            <span>°</span>
            <div
                className={ 'switch-container' }
                onClick={ onToggle }
            >
                <div className={ 'labels' }>
                    <span className={ !switchState ? 'active' : '' }>C</span>
                    <span className={ switchState ? 'active' : '' }>F</span>
                </div>
                <div className={ switchState ? 'switch toggled' : 'switch' }/>
            </div>
        </div>
    );
};