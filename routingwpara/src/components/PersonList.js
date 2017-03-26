import React from 'react'
import Button from 'react-materialize';
import {Link, browserHistory} from 'react-router';
import Details from './Details';

var persons = [
  {id: 1,name: "Jens",age : 18}
  ,{id: 2,name: "Peter",age : 23}
  ,{id: 3,name: "Hanne",age : 23}
];

class PersonList extends React.Component {
  constructor(){
    super();
    this.state = {
      people: persons
    };
    this.getTable = this.getTable.bind(this);
  }

  getTable(){
    const mapped = this.state.people.map((p, index) => {
      return <div>
        <p>{p.name}</p><Link handler={Details} href={'#/details'}>View</Link>
      </div>
  });
  return mapped;
  }

  render () {
    return(
      <div>
        {this.getTable()}
        {/*<Link to="#/home"><Button waves='light'>Bingo</Button></Link>*/}
      </div>
    );
  }
}

export default PersonList;
