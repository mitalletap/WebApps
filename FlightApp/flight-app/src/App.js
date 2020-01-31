
import React, { Component } from 'react';
import LargeTable from './components/DataTable';
import 'typeface-roboto';
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

const URL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-02-01?";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Quotes: [],
      Places: [],
      Carriers: [],
      Currencies: []
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
        // console.log(res.Quotes);
        // console.log(res.Places);
        // console.log(res.Carriers);
        // console.log(res.Currencies[0].Code);
        this.setState({Quotes: res.Quotes , Places: res.Places , Carriers: res.Carriers , Currencies: res.Currencies})
      })
    });
  }

















  render() {
    const {Quotes, Places, Carriers, Currencies} = this.state;
    const data = {Quotes, Places, Carriers, Currencies};
    const qData = Quotes;








    console.log(data);
    return (
      <React.Fragment>
        <LargeTable passedData={this.state.Quotes}></LargeTable>



        {/* <h1> TABLE </h1>
      <h4> 
        {this.state.Quotes ?  this.state.Quotes.map((item) => 
          <p> Min Price : {item.MinPrice} </p>
          ) : <p> Loading.....</p>}
      </h4>
      <h4> 
        {this.state.Places ?  this.state.Places.map((item) => 
          <p> City : {item.Name} </p>
          ) : <p> Loading.....</p>}
      </h4>
      <h4> 
        {this.state.Carriers ?  this.state.Carriers.map((item) => 
        <p> Airliner : {item.Name} </p>
        ) : <p> Loading.....</p>}
      </h4>
      <h4> 
        {this.state.Currencies ?  this.state.Currencies.map((item) => 
        <p> Currency {item.Code} </p>
        ) : <p> Loading.....</p>}
      </h4> */}
      </React.Fragment>
    );
  }
}




export default App; 


/*


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

      */

