import React from 'react'
import { Button, Row, Col, Navbar, NavItem } from 'react-materialize';

class Layout extends React.Component {
  render () {
    return(
      <Row>
      <Col s={12}>
      <Navbar brand='RouteExample' left>
        <NavItem href='#/home'>List</NavItem>
        <NavItem href='#/add'>Add</NavItem>
      </Navbar>
      {this.props.children}
      </Col>
    </Row>
    );
  }
}

export default Layout;
