import React from 'react';
import './MainLayout.scss';

export const MainLayout = ({ children }) => {

    return (
        <div className={ 'layout' }>
            { children }
        </div>
    );
};