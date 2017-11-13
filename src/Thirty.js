import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class Thirty extends Component {
  render() {
    return (
      <div>
        <RB.Grid>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <RB.Jumbotron>
                <h1>Initial Plan</h1>
                <p>30 days</p>
              </RB.Jumbotron>
            </RB.Col>
          </RB.Row>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <p>
                The first 30 days there will be more frequent meetings with various teams.  This is for familiarization and analyzation of work flow.  This time period includes understanding the infrastructre, understanding the internal work flow in engineering, requirement needs, determining goals, milestones, budgets, recruitment strategy, and a deep dive into various engineering subsystems.  There are a lot of bullet points in this timeframe, while you should expect the number of bullet points to taper off in the next 60 and 90 days.  The goal here is that the engineering team and development processes are automated in such a way that is predictable yet where changing business needs can be identified, developed, and deployed quickly.  There is a continuing theme with updating the CEO and code development as well as recruitment.
              </p>
                <ul>
                  <li>Week 1
                    <ul>
                      <li>Evaluate all subsystems</li>
                      <li>Meet with team on high level discussion on platform details, specifically language choice.  Here we need to determine the right tool for the right job as a function of labor cost, labor supply, ease of use, effectiveness, and scalability.</li>
                      <li>Meet with CEO to determine specific details on milestones, budgets, mission and goals. A shared, cohesive vision must be formed.</li>
                      <li>Set up periodic and frequent meetings with CEO at least once a week.  Always set aside time at least once a week.  While realistically the CTO and CEO are pulled in many directions and always adjusting their meeting schedules, at the least a baseline meeting time should be established.</li>
                      <li>Always allow for meetings with CEO at anytime.</li>
                      <li>Set up periodic and frequent meetings with engineering team, product, sales, and marketing.</li>
                      <li>Always allow for meetings at anytime with any and all team members.</li>
                      <li>Reduce exposure to lack of human capital (engineers) due to programming language contraints.  Here we need to face the realities of the labor supply and adjust the skillsets we need to recruit.</li>
                      <li>Submit a more detailed strategy on engineering recruitment.</li>
                      <li>Recruit engineers.  Various methods here.  Friends, colleagues, meet up groups, conferences, college recruitement</li>
                      <li>Grok the codebase.  I need to be able to communicate in a technical mannner effectively.</li>
                      <li>Grok the infrastructure</li>
                      <li>Grok the datastorage layer.</li>
                      <li>Set up meetings with remote engineers.</li>
                    </ul>
                  </li> 
                  <li>Week 2
                    <ul>
                      <li>Determine fiscal strategy for infrastructure and personnel. Planning must be made to determine how much to spend on engineers and infrastructure.  While this can be fairly loose at this stage, it is best to at least set a value to strive for.</li>
                      <li>Perform cost analysis on the next 4 quarters. Save money.  Always.</li>
                      <li>Recruit</li>
                      <li>Determine deployment strategy coinsiding with vision and mission.  Set your timelines and deployment goals here.</li>
                      <li>Determine bottlenecks and pain points in the software cycle all the way from conception to production.</li>
                      <li>Discuss with engineering team optimal developement processes as function of milestones and team size. ENgineering specific, code review?  unit testing?  continuous integration?  Ensure that there is enough process to deply easily, accurately, and quickly, but not too much process that will slow development.</li>
                      <li>Propose and introduce development processes to all teams.  Communication is key here, establish a system that allows product, sales, and engineering to easily open a dialogue with one another.  While interpersonal interactions do have its merits, the ideas that are born from those interactions must be documented.  Protocos must be in place for bug tracking, feature tracking, and product fast tracking (I need this feature out today!)</li>
                      <li>Assist the engineering team in development.</li>
                      <li>Update CEO</li>
                    </ul>
                  </li>
                  <li>Week 3
                    <ul>
                      <li>Evaluate, adjust, iterate processes determined in previous week.</li>
                      <li>Determine and implement changes in infrastructure. Any holes in the system?  Can we save some money without loss of performance?</li>
                      <li>Meet with CEO, peer into crystal ball and predict the future.  This is how we dominate the market, at one point you have to place a bet.</li>
                      <li>Meet with engineering team, peer into crystal ball, predict the future.</li>
                      <li>Set detailed milestones.  Based on vision of the future.</li>
                      <li>Recruit</li>
                      <li>Develop and commit code</li>
                      <li>Update CEO</li>
                    </ul>
                  </li>
                  <li>Week 4
                    <ul>
                      <li>Interview candidates.</li>
                      <li>Recruit</li>
                      <li>Refine tactics in regards to development process and communication between all teams and team members.  Now I have a good working knowledge of how things work internally.  Possibly make some changes, introduce process, remove bottlenecks.</li>
                      <li>Develop and commit code.  Need to keep the blade sharp.</li>
                      <li>Evaluate system monitoring</li>
                      <li>Evaluate disaster recovery.  Ensure high availability.  The 5 nines (99.999%) are old school these days.  100% is the new standard</li>
                      <li>Re-evaluate infrastructure costs.  Save money, allow for diversion to sales and marketing.  A bloated engineering budget is worthless.  A slim, hungry engineering team provides the best output.</li>
                      <li>Meet with engineering team - evaluate processes, feedback, adjust, iterate.</li>
                      <li>Meet with sales team - discuss what product and features clients have concerns with, discuss what product and features that would allow sales to team to sell easier.  We have to know what makes the product an easy sale. Unfortunately, the mantra "If you build it, they will come" hardly ever works.  You need marketing.  Is there a killer feature we can indentify that will merket itself?  We should strive towards increasing our brand awareness.</li>
                      <li>Meet with CEO</li>
                      <li>Discuss performance and adjust.  Am I the right fit here?  If not, bow out.  If so, make any needed adjustments</li>
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

export default Thirty;
