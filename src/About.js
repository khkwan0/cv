import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div>
        <RB.Grid>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <RB.Jumbotron>
                <h1>About this site</h1>
                <p>Technical Information</p>
              </RB.Jumbotron>
            </RB.Col>
          </RB.Row>
          <RB.Row>
            <p>This site has been developed with:</p>
            <ul>
              <li>ReactJS as a front end</li>
              <li>React Bootstrap</li>
              <li>ES6 style javascript</li>
              <li>Dockerized</li>
              <li>The content originates from a REST API call written in GoLang</li>
              <li>The content storage utilizes MongoDB.</li>
              <li>While using a GO API to deliver content may be over engineered for this website, it is merely demonstrative in nature.</li>
              <li>Ubuntu 16.0.4</li>
            </ul>
          </RB.Row>
        </RB.Grid>
      </div>
    )
  }
}

export default About;
