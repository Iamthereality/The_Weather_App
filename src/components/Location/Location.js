import React from 'react';
import './Location.scss'

export const Location = ({ city, inputLocation, getLocation }) => {
    return (
        <div className="user-location">
            <h1 className="city">
                { city }
            </h1>
            <div className="set-location">
                <div
                    className="set-method"
                    onClick={ inputLocation }
                >
                    { city ? 'Сменить город' : 'Выбрать город' }
                </div>
                <div
                    className="set-method"
                    onClick={ getLocation }
                >
                    <svg viewBox="0 0 512 512">
                        <path d="M0,225.3c0.4,6.3,4.6,11.7,10.6,13.5l146.8,44.9c34,10.4,60.5,36.9,70.8,70.8l44.9,146.8c1.8,6,7.2,10.2,13.5,10.6
			c0.3,0,0.6,0,0.9,0c5.9,0,11.4-3.5,13.8-9L510.8,21c2.5-5.6,1.2-12.2-3.2-16.6C503.2,0,496.7-1.2,491,1.2L9,210.7
			C3.3,213.2-0.3,219,0,225.3z"/>
                    </svg>
                    { 'Моё местоположение' }
                </div>
            </div>
        </div>
    );
};