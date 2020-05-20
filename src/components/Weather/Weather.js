import React from 'react';
import './Weather.scss';

import WeatherIcon from 'react-icons-weather'

export const Weather = ({ data, tempUnit }) => {

    const temperature = () => {
        if (data) {
            if (tempUnit && tempUnit === 'C') {
                return parseInt(data.main.temp - 273.15);
            } else if (tempUnit && tempUnit === 'F') {
                return parseInt((data.main.temp - 273.15) * 9 / 5 + 32);
            }
        } else {
            return 0;
        }
    };

    let content;
    if (data) {
        const { weather } = data;
        const { id, description } = weather[0];
        content = (
            <div className={ 'current-weather' }>
                <div className={ 'temperature' }>
                    <WeatherIcon
                        name={ 'owm' }
                        iconId={ id.toString() }
                    />
                    <span>{ temperature() }°</span>
                </div>
                <div className="description">
                    { description[0].toUpperCase() + description.slice(1) }
                </div>
            </div>
        );
    } else {
        content = (
            <h1>Укажиет город или определите местоположение</h1>
        );
    }

    return (
        <>
            { content }
        </>
    );
};