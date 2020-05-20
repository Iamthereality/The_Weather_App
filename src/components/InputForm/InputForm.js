import React, { useState } from 'react';
import './InputForm.scss';

import Weather from "../../services/Weather";

export const InputForm = ({ visibility, onSubmit, data, setLoading }) => {
    const [inputValue, setInputValue] = useState('');

    const clickHandler = async () => {
        setLoading(true);
        if (inputValue !== '') {
            await Weather.byCityName(inputValue)
                .then(resp => {
                    data(resp);
                    onSubmit(resp.name);
                })
                .catch(e => {
                    setLoading(false);
                    console.log(e)
                });
        }
        dismiss();
        setLoading(false);
    };

    const enterKeyPress = (event) => {
        if (event.keyCode === 13) {
            clickHandler();
        }
    };

    const dismiss = () => {
        visibility(false);
    };

    return (
        <div className={ 'input-form' }>
            <input
                value={ inputValue }
                onChange={ event => setInputValue(event.target.value) }
                onBlur={ dismiss }
                onKeyUp={ enterKeyPress }
            />
            <button
                onClick={ clickHandler }
            >
                { 'OK' }
            </button>
        </div>
    );
};