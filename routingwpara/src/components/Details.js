import React from 'react'

class Details extends React.Component {
  render () {
    console.log(this.props.bingo);
    return(
      <div>{this.props.testvalue}</div>
    );
  }
}

export default Details;
