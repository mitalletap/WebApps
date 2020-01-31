import React, { Component } from 'react';
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;


class DataTable extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() { 
      let {quote} = this.props;
      console.log(this.props.quote);
        return ( 
            <div>
          <Table
            virtualized
            height={1400}
          >
            <Column width={70}>
            <center><HeaderCell width={100}>Id</HeaderCell></center>
              <Cell dataKey={this.props.passedData} />
            </Column>
  
            <Column width={130}>
              <center><HeaderCell width={100}>First Name</HeaderCell></center>
              <Cell dataKey="firstName" />
            </Column>
  
            <Column width={130}>
            <center><HeaderCell width={100}>Last Name</HeaderCell></center>
              <Cell dataKey="lastName" />
            </Column>
  
            <Column width={200}>
            <center><HeaderCell width={100}>City</HeaderCell></center>
              <Cell dataKey="city" />
            </Column>
  
            <Column width={200}>
            <center><HeaderCell width={100}>Street</HeaderCell></center>
              <Cell dataKey="street" />
            </Column>
          </Table>
        </div>
         );
    }
}
 
export default DataTable;

