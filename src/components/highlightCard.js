import React from "react";
import './highlightCard.scss'

export default function HighlightCard({ selectedCountryId, report }) {
    const data = report

    const flag = data?.countryInfo?.flag
    const country = data?.country
    const count = data?.cases
    const recovered = data?.recovered
    const death = data?.deaths
    const dateBuilder = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()
        return `${day} ${date} ${month} ${year} `
    }

    return (
        <div className="card_container">
            <div>
                <div className="card_boxes" >
                    <div
                        id={selectedCountryId === 'Switzerland' ? 'Switzerland' : ''}
                        className="card_box box-2">
                        <h2>
                            Country
                        </h2>
                        <h1>
                            {country}
                        </h1>
                    </div>
                    <div
                        id={selectedCountryId === 'Switzerland' ? 'Switzerland' : ''}
                        className="card_box box-2 ">

                        <img src={flag} alt='' />

                    </div>
                    <div
                        id={selectedCountryId === 'Switzerland' ? 'Switzerland' : ''}
                        className="card_box box-2">
                        <h2>
                            Last Update
                        </h2>
                        <h1>
                            {dateBuilder(new Date())}
                        </h1>
                    </div>
                    <div id="cases" className="card_box box-1">
                        <h2>
                            Cases
                        </h2>
                        <h1>
                            {count}
                        </h1>
                    </div>
                    <div id="recovered" className="card_box box-1">
                        <h2>
                            Recovered
                        </h2>
                        <h1
                            style={{
                                color: '#3CCF4E'
                            }}>
                            {recovered}
                        </h1>
                    </div>
                    <div id="death" className="card_box box-1">
                        <h2>
                            Deaths
                        </h2>
                        <h1
                            style={{
                                color: '#E21818'
                            }}>
                            {death}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}