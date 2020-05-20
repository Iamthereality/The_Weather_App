import React, { useState } from 'react';
import './Header.scss';

import { SwitchUnit } from "../SwitchUnit/SwitchUnit";
import { InputForm } from "../InputForm/InputForm";
import { Location } from "../Location/Location";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";

import Weather from "../../services/Weather";

export const Header = ({ setData, setTempUnit }) => {
    const [loading, setLoading] = useState(false);

    const getLocation = () => {
        const location = {};
        navigator.geolocation.getCurrentPosition(position => {
            location.latitude = position.coords.latitude;
            location.longitude = position.coords.longitude;
        });
        return location;
    };

    const [userLocation, setUserLocation] = useState(getLocation());
    const [userCity, setUserCity] = useState(null);
    const [isUserInput, setIsUserInput] = useState(false);

    let content;

    const getLocationHandler = async () => {
        setLoading(true);
        setUserLocation(getLocation());
        const { latitude, longitude } = userLocation;
        await Weather.byLocation(latitude, longitude)
            .then(resp => {
                setLoading(false);
                setData(resp);
                setUserCity(resp.name);
            }).catch(e => {
                setLoading(false);
                console.log(e);
            });
    };

    const inputLocationHandler = () => {
        setIsUserInput(true);
    };

    if (!isUserInput) {
        if (loading) {
           content = <LoadingIndicator/>
        } else {
            content = (
                <Location
                    city={ userCity }
                    inputLocation={ inputLocationHandler }
                    getLocation={ getLocationHandler }
                />
            );
        }
    } else {
        if (loading) {
            content = <LoadingIndicator/>
        } else {
            content = (
                <InputForm
                    visibility={ setIsUserInput }
                    onSubmit={ setUserCity }
                    data={ setData }
                    setLoading={ setLoading }
                />
            );
        }
    }

    return (
        <header>
            { content }
            <SwitchUnit
                unit={ setTempUnit }
            />
        </header>
    );
};