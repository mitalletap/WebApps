import React, { Component } from 'react';
import axios from 'axios'
import Flights from './components/flights';
import { MyTable} from './components/Table';

const { Column, HeaderCell, Cell, Pagination } = Table;
/*http://api.aviationstack.com/v1/flights?access_key=03ce07bbf3aec61d764a149b4be90037*/
const params = {
  access_key: '03ce07bbf3aec61d764a149b4be90037'
}
const Kparams = {
  'x-rapidapi-host': 'https://cors-anywhere.herokuapp.com/http://api.aviationstack.com/v1/flights',
  'x-rapidapi-key': '03ce07bbf3aec61d764a149b4be90037'
}
const URL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-02-01?";
const KURL = "https://cors-anywhere.herokuapp.com/http://api.aviationstack.com/v1/flights";




class App extends Component {
  constructor() {
    super();
    this.state = {
      Quotes: null,
      Places: null,
      Carriers: null,
      Currencies: null
    }
    this.getData()
  }
  
  getData(){
    let data = fetch(URL, { 
      headers: {
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': 'c25f6b34acmsh3e88e6211d976dcp1b322cjsn2b02ff0fa923'
      }
    }).then((resp) => {
      resp.json().then((res) => {
        console.log(res.Quotes);
        console.log(res.Places);
        console.log(res.Carriers);
        console.log(res.Currencies[0].Code);
        this.setState({Quotes: res.Quotes , Places: res.Places , Carriers: res.Carriers , Currencies: res.Currencies})
      })
    });
  }

  render() {
    const {Quotes, Places, Carriers, Currencies} = this.state;
    return (
      <React.Fragment>
        <LargeTable quoteData={this.state.Quotes.QuoteId}></LargeTable>
      <h1> 
        {this.state.Quotes ?  this.state.Quotes.map((item) => 
          <p> Min Price : {item.MinPrice} </p>
          ) : <p> Loading.....</p>}
      </h1>
      <h1> 
        {this.state.Places ?  this.state.Places.map((item) => 
          <p> City : {item.Name} </p>
          ) : <p> Loading.....</p>}
      </h1>
      <h1> 
        {this.state.Carriers ?  this.state.Carriers.map((item) => 
        <p> Airliner : {item.Name} </p>
        ) : <p> Loading.....</p>}
      </h1>
      <h1> 
        {this.state.Currencies ?  this.state.Currencies.map((item) => 
        <p> Currency {item.Code} </p>
        ) : <p> Loading.....</p>}
      </h1>
      </React.Fragment>

    );
  }
}


export default App; 
