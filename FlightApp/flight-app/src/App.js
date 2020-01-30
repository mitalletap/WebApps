import React, { Component } from 'react';
import axios from 'axios'
import Flights from './components/flights';
import FlightData from './data/flightData.json'
/*http://api.aviationstack.com/v1/flights?access_key=03ce07bbf3aec61d764a149b4be90037*/
const params = {
  access_key: '03ce07bbf3aec61d764a149b4be90037'
}
const URL = "https://cors-anywhere.herokuapp.com/http://api.aviationstack.com/v1/flights";
class App extends Component {
  state = {
    isLoading: true,
    f: []
  };

  componentDidMount() {
    console.log("Pre")
    axios.request({
      url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-02-01?',
      method: 'get',
      headers: {
        'x-rapidapi-key': 'c25f6b34acmsh3e88e6211d976dcp1b322cjsn2b02ff0fa923'
      }
    }).then(response =>
      response.data.results.map(flightData => ({
        f: `${flightData.data}`
      }))
      
    )
      .catch(error => this.setState({ error, isLoading: false }));
    //.then(res => console.log(res.data.Quotes[0].MinPrice));
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.isLoading ? (
          this.state.f.map(f => {
            const { quotes, place, carrier, currency } = f;
            return (
              <div>
                <p>Name: {f.quotes.quoteid}</p>
                <p>Email Address: {place}</p>
                <p>Name: {carrier}</p>
                <p>Email Address: {currency}</p>
                <hr />
              </div>
            );
          })
          // If there is a delay in data, let's let the user know it's loading
        ) : (
            <h3>Loading...</h3>
          )}
      </React.Fragment>
    );
  }
}
export default App; 


/*
import React, { Component } from 'react';
import axios from 'axios'
import Flights from './components/flights';
const params = {
  access_key: '03ce07bbf3aec61d764a149b4be90037'
}

const URL = "https://cors-anywhere.herokuapp.com/http://api.aviationstack.com/v1/flights";

class App extends Component {
  state = {
    f: []
  };

  componentDidMount() {
    axios.get(URL, { params })
      .then(res => {
        const flights = res.data;
        this.setState({ f: flights.data });
        console.log(flights.data);
      })
  }

  render() {
    return (
      <div>
        <center><h1> Flights </h1></center>
        {this.state.f.map(function (flight) {
          return (
            <div>
              <a>
                {flight.departure.airport}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
*/


/*
render() {
    return (
      <div>
        <h1>Hello There</h1>
        {FlightData.map((flightDetail, index) => {
          return <h1>{flightDetail.Quotes[index].QuoteId}</h1>
        })}
     </div>
    );
  }
*/