import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class Ninety extends Component {
  render() {
    return (
      <div>
        <RB.Grid>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <RB.Jumbotron>
                <h1>Initial Plan</h1>
                <p>90 Days and beyond</p>
              </RB.Jumbotron>
            </RB.Col>
          </RB.Row>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <p>
                Now, processes should be in place.  These processes should be tested by now.  Of course, we must leave room for flexibility, but the baseline process should be familiar with all team members now.  Infrastructure optimization should be underway or completed.  We should have a couple of engineers joining us with their specific skillset.  Communcation is key, as you can see by always meeting with various teams.  At this point we can really start innovating and coming up with new features and products to further achieve our goals.
              </p>
              <ul>
                <li>Week 9
                  <ul>
                    <li>Meet with product, engineering, and sales. Determine path for driving more revenue</li>
                    <li>Adjust infrastructure</li>
                    <li>Re-evaluate all processes</li>
                    <li>Develop and commit</li>
                    <li>Update CEO</li>
                  </ul>
                </li>
                <li>Week 10
                  <ul>
                    <li>Recruit</li>
                    <li>Various meetings with various teams</li>
                    <li>Update CEO</li>
                    <li>Commit code</li>
                  </ul>
                </li>
                <li>Week 11
                  <ul>
                    <li>Various meetinggs with various teams</li>
                    <li>Update CEO</li>
                    <li>Commit code</li>
                  </ul>
                </li>
                <li>Week 12
                  <ul>
                    <li>Various meetings with various teams</li>
                    <li>Update CEO</li>
                    <li>Commit code</li>
                  </ul>
                </li>
              </ul>
            </RB.Col>
          </RB.Row>
        </RB.Grid>
      </div>
    )
  }
}

export default Ninety;
