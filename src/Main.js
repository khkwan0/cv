import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import Intro from './Intro';
import Cv from './Cv';
import About from './About';
import Thirty from './Thirty';
import Sixty from './Sixty';
import Ninety from './Ninety';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view
    }
    this.setViewIntro = this.setViewIntro.bind(this);
    this.setViewCv = this.setViewCv.bind(this);
    this.setViewAbout = this.setViewAbout.bind(this);
    this.setView30 = this.setView30.bind(this);
    this.setView60 = this.setView60.bind(this);
    this.setView90 = this.setView90.bind(this);
  }

  setViewIntro() {
    this.setState({
      view: 'intro'
    })
  }

  setViewCv() {
    this.setState({
      view: 'cv'
    })
  }

  setViewAbout() {
    this.setState({
      view: 'about'
    })
  }

  setView30() {
    this.setState({
      view: '30'
    })
  }

  setView60() {
    this.setState({
      view: '60'
    })
  }

  setView90() {
    this.setState({
      view: '90'
    })
  }

  render() {
    return (
      <div className="Main">
        <RB.Navbar fixedTop={true} inverse collapseOnSelect>
          <RB.Navbar.Header>
            <RB.Navbar.Brand>
              <span className="clickable" onClick={this.setViewIntro}>Kenneth Kwan</span>
            </RB.Navbar.Brand>
            <RB.Navbar.Toggle />
          </RB.Navbar.Header>
          <RB.Navbar.Collapse>
            <RB.Nav>
              <RB.NavItem eventKey={1} href="#" onClick={this.setViewCv}>CV</RB.NavItem>
            </RB.Nav>
            <RB.Nav pullRight>
              <RB.NavDropdown eventKey={2} title="30/60/90" id="dropdown">
                <RB.MenuItem eventKey={2.1} onClick={this.setView30}>30</RB.MenuItem>
                <RB.MenuItem eventKey={2.2} onClick={this.setView60}>60</RB.MenuItem>
                <RB.MenuItem eventKey={2.3} onClick={this.setView90}>90</RB.MenuItem>
              </RB.NavDropdown>
              <RB.NavItem eventKey={3} href="#" onClick={this.setViewAbout}>About this site</RB.NavItem>
            </RB.Nav>
          </RB.Navbar.Collapse>
        </RB.Navbar>

        {this.state.view === 'intro' &&
          <Intro />
        }
        {this.state.view === 'cv' && 
          <Cv />
        }
        {this.state.view === 'about' &&
          <About />
        }
        {this.state.view === '30' &&
          <Thirty />
        }
        {this.state.view === '60' &&
          <Sixty />
        }
        {this.state.view === '90' &&
          <Ninety />
        }
      </div>
    )
  }
}

export default Main;
