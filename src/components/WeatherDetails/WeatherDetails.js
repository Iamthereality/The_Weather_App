import React from 'react';
import './WeatherDetails.scss';

export const WeatherDetails = ({ data }) => {
    let content;

    const wind = (direction) => {
        if (direction <= 10 && direction >= 0 || direction <= 360 && direction >= 340) {
            return 'северный';
        } else if (direction > 10 && direction < 45) {
            return 'северо-восточный';
        } else if (direction >= 45 && direction < 90) {
            return 'восточный';
        } else if (direction >= 90 && direction < 135) {
            return 'юго-восточный';
        } else if (direction >= 135 && direction < 180) {
            return 'южный';
        } else if (direction >= 180 && direction < 230) {
            return 'юго-западный';
        } else if (direction >= 230 && direction < 290) {
            return 'западный';
        } else if (direction >= 290 && direction < 340) {
            return 'северо-западный';
        }
    };

    if (data) {
        const { deg, speed } = data.wind;
        const { pressure, humidity } = data.main;
        content = (
            <>
                <div className="detail">
                    <span>Ветер</span>
                    <p><span>{ speed }</span>{ ` м/с, ${ wind( deg) }` }</p>
                </div>
                <div className="detail">
                    <span>Давление</span>
                    <p><span>{ pressure }</span>{ ' мм рт. ст.' }</p>
                </div>
                <div className="detail">
                    <span>Влажность</span>
                    <p><span>{ `${ humidity }%` }</span></p>
                </div>
                <div className="detail">
                    <span>Облачность</span>
                    <p><span>{ `${ data.clouds.all }%` }</span></p>
                </div>
            </>
        );
    } else {
        content = null
    }

    return (
        <div className={ 'weather-details' }>
            { content }
        </div>
    );
};