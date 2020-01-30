import React from 'react'

const Flights = ({ flights }) => {
    return (
        <div>
            <center><h1>Flights</h1></center>
            {flights.map((flights) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{flights.data.data[0].flight_date}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{flights.data.data[0].flight_status}</h6>
                        <p class="card-text">{flights.data.data[0].departure.airport}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Flights