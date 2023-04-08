import './App.css';
import React, { useEffect, useState } from "react";
import CountrySelector from './components/countrySelector';
import Highlight from './components/highlight';
import axios from 'axios';
function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountryId, setSelectedCountryId] = useState('Vietnam')
  const [report, setReport] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/countries').then(res => {
      setCountries(res.data)
    })

  }, [])


  const handleOnChange = (value) => {
    setSelectedCountryId(value)
  }

  useEffect(() => {
    if (selectedCountryId) {
      setLoading(true)
      axios.get(`https://disease.sh/v3/covid-19/countries/${selectedCountryId}`)
        .then(res => {
          setReport(res.data)
          // console.log(res);
          setLoading(false)
        })
    }
  }, [selectedCountryId])

  return (
    <div className='app'>
      <CountrySelector
        countries={countries} handleOnChange={handleOnChange} value={selectedCountryId} />
      {loading ?
        <span className='loading'>
          <span className='loading-inner'></span>
        </span>
        :
        (
          <>
            <Highlight
              selectedCountryId={selectedCountryId}
              report={report} />
          </>
        )}
    </div>
  );
}

export default App;
