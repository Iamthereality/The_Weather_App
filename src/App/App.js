import React, { useState } from 'react';
import './App.scss';

import { MainLayout } from "../components/MainLayout/MainLayout";
import { Header } from "../components/Header/Header";
import { Weather } from "../components/Weather/Weather";
import { WeatherDetails } from "../components/WeatherDetails/WeatherDetails";

export const App = () => {
    const [data, setData] = useState(null);
    const [tempUnit, setTempUnit] = useState('C');

    return (
        <MainLayout>
            <Header
                setData={ setData }
                setTempUnit={ setTempUnit }
            />
            <Weather
                data={ data }
                tempUnit={ tempUnit }
            />
            <WeatherDetails
                data={data}
            />
        </MainLayout>
    );
};
