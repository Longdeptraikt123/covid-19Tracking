import React from "react";
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@mui/material'
import './countrySelector.scss'
const CountrySelector = ({ value, handleOnChange, countries }) => {
    return (
        <FormControl style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            margin: '-10px 10px 8px 10px'
        }} className="form_control">
            <div style={{
                color: '#fff',
                fontSize: '30px',
                textAlign: 'center'
            }}>
                <h1 id="covid-19">
                    Covid-19 Tracking
                </h1>
            </div>
            <div id="live" style={{
                color: '#fff',
                fontSize: '17px',
                textAlign: 'center',

            }}>
                <span>
                    Live <span style={{ fontSize: '12px' }}>🔴</span>
                </span>
            </div>
            <InputLabel
                htmlFor="country-selector" shrink>
            </InputLabel>
            <NativeSelect
                style={{
                    textAlign: 'center',
                    color: "#fff",
                    width: '40%'
                }}
                value={value}
                onChange={(e) => { handleOnChange(e.target.value) }}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}
            >
                {
                    countries.map((country) => {
                        return (
                            <option key={country.countryInfo._id} value={country.country}>
                                {country.country}
                            </option>
                        )
                    })}
            </NativeSelect>
            <FormHelperText style={{ color: "#fff" }}>Choose your country</FormHelperText>
        </FormControl>
    )
}
export default CountrySelector