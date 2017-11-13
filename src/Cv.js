import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class Cv extends Component {
 
  constructor(props) {
   super(props);
   this.state = {
     body: ''
   }
  } 

  componentWillMount() {
    fetch('http://23.239.1.81:2001/api/cv', 
      {
        method: 'GET',
        credentials: 'include'
      }
    )
    .then((result) => {return result.json() })
    .then((resultJson) => {
      this.setState({
        body: atob(resultJson[0].text)
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <RB.Grid>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <RB.Jumbotron>
                <h1>Kenneth Kwan</h1>
                <p>Curriculum Vitae</p>
              </RB.Jumbotron>
            </RB.Col>
          </RB.Row>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <p>Responsible for all global IT operations, engineering research and development.  Provided the foundations for launching three successful startups, two of which are now publicly traded.  Strategically positioned the technology towards programmatic platforms to ensure current and future growth.  Successfully transitioning the business model and technology stack was an adaptive process.  In 2013, the programmatic landscape had no standards, thus requiring fast pivoting and adaptation.  The transition included recruiting and positioning human capital, infrastructure changes across multiple colocations scattered across the globe, renegotiating with various vendors that supplement our infrastructure, development of enterprise class software technologies able to handle load on a global scale.</p>
              <RB.ListGroup>
                <RB.ListGroupItem>
                  <h3>2008 - Present</h3>
                  <h4>EngageBDR, Inc</h4>
                  <p>EngageBDR Inc, is a bootstrapped digital advertising company.  The company was formed in late 2008 starting as a display network.  The company has seen rapid expansion within the first 4 years of operations and has had an aggregate revenue of over 250 million USD.  Typical traffic throughput is measured in billions of HTTP requests per day.  In the recent past, the company has made a transition away from display to the programmatic sub ecosystem, increasing traffic to several orders of magnitude.  As the CTO, I had to recruit and lead a capable team, all of them without any prior experience in the digital advertising field.  Equally important was my role in expanding our infrastructure to meet all performance expectations of the system while keeping cost to a minimum.  The requirements forced us to stay away from cloud services, requiring us to manage and maintain our own infrastructure.  We found the management and maintenance of our own infrastructure to have minimal impact when compared to using any IaaS offerings.  This in turn saved us over 5 million dollars per annum in infrastructure costs.  Optimizing infrastructure, recruting, training, process development, vendor management, executive meetings, strategic analysis, was all part of the daily tasks at EngageBDR.  EngageBDR is a public traded stock with symbol EN1.</p>
                  <ul>
                    <li>Q4 2008 - Hired to develop the technology for a new digital advertising platform.  This process included the initial infrastructure as well as software development.  This is an ongoing process to present day and beyond.</li>
                    <li>Q2 2009 - Initial deployment to production of new technology stack</li>
                    <li>Q4 2009 - First engineering hire</li>
                    <li>Q1 2010 - Expansion of infrastructure</li>
                    <li>Q2 2010 - Expansion of engineering team</li>
                    <li>Q2 2010 - Create and evolve an internal process, organizing the communication and development process between departments</li>
                    <li>Q3 2010 - Development of various new technologies pivoting upon business requirements.  Another ongoing process to present day.</li>
                    <li>Q4 2010 - Infrastructure expansion onto both coasts of the continental United States.</li>
                    <li>Q1 2011 - Expansion of engineering team.  Vendor re-negotiation.  Realigned infrastructure allowing for global scaling.</li>
                    <li>Q2 2011 - Applied additional processes streamlining the overhead of cross departmental communication.</li>
                    <li>Q3 2011 - Ongoing development of platform to meet business needs.</li>
                    <li>Q4 2011 - Engineering team expansion.</li>
                    <li>Q4 2011 - Data mining and Machine learning incoporated.</li>
                    <li>Q1 2012 - Incorporated additional media types to advertising platform.  (Video).</li>
                    <li>Q2 2012 - Kicked off transition to new programmatic advertising paradigm. A continuing process.</li>
                    <li>Q3 2012 - Q2 2013 - See Lottogopher below.</li>
                    <li>Q4 2012 - Infrastructure exapansion into Europe.</li>
                    <li>Q3 2013 - Engineering team expansion.</li>
                    <li>Q3 2013 - Deployed remote engineering team out of Hyderabad, India.</li>
                    <li>Q3 2013 - Consolidate infrastucture housing from disjoint datacenters to Equinix.</li>
                    <li>Q4 2013 - Initial deployment of demand side platform, programmatic.</li>
                    <li>Q1 2014 - Oversee onboarding and integration of new supply partners.  Continuing.</li>
                    <li>Q2 2014 - Initial deployment of supply side platform, programmatic.</li>
                    <li>Q3 2014 - Oversee onboarding and integration of demand partners.  Continuing.</li>
                    <li>Q4 2014 - Begin development of digital advertising exchange.</li>
                    <li>Q1 2015 - Initial test of new exchange.</li>
                    <li>Q2 2015 - Infrastructure expansion and re-negotiation of current contracts.</li>
                    <li>Q3 2015 - Engineering team expansion.</li>
                    <li>Q4 2015 - Addition engineering expansion.  Global release of exchange.</li>
                    <li>Q1 2016 - Pivot data extraction from data mining and machine learning towards input from the exchange.</li>
                    <li>Q2 2016 - Begin transition of duties to new CTO.</li>
                    <li>Q3 2016 - Board of advisers.</li>
                    <li>Q4 2016 - Complete transition of daily duties to new CTO.</li>
                    <li>Q1 2017 - Present:  Research and development on new technologies.  Keep up with the cool kids.</li>
                  </ul>
                </RB.ListGroupItem>
                <RB.ListGroupItem>
                  <h3>Q2 2009 - Q2 2010</h3>
                  <h4>Steelhouse</h4>
                  <p>
                    Started in the middle of 2009, Steelhouse media was pitched as version of re-targeting.  In 2009, venture capital firms were very wary of investments with just a proposal and an idea.  This was due mainly to the recent market crash in 2008 which affected almost all sectors globally.  While our series A funding was initially denied, the engineering team was offered an option to bootstrap.  Within 30 days, I had laid down the backend infrastructure and code to have a working, revenue generating platform.  Shortly after, the word had gotten out that this fledgling company had a revenue generating system within 30 days.  Series A soon followed, however on more favorable terms.  At this time, I was physically dividing my time and presence between Marina Del Rey and West Hollwood.  In mid 2010, it was apprent to all parties that I must focus on one company, thus I departed from Steelhouse on the best of terms.  Both companies are still alive and well today.  The lesson learned from the experience is that it is possible with enough will and focus, to launch a revenue generating platform very rapidly.
                  </p>
                  <ul>
                    <li>Q2 2009 - Joined Steehouse Media</li>
                    <li>Q3 2009 - Deployed initial code base and infrastructure.</li>
                    <li>Q4 2009 - Original codebase greatly assisted in Series A funding.</li>
                    <li>Q1 2010 - Expanded infrastructure.</li>
                    <li>Q2 2010 - Left Steelhouse to concentrate on EngageBDR.</li>
                  </ul>
                </RB.ListGroupItem>
                <RB.ListGroupItem>
                  <h3>Q3 2012 - Q2 2013</h3>
                  <h4>Lottogopher</h4>
                  <p>
                    Around the latter half of 2012, EngageBDR was approached by another company to help them accelerate their digital platform.  The lottogopher platform presents users a way to purchase lottery tickets online.  The platform was initially a PHP module written on top of the Drupal platform.  It did not scale, nor did it lend itself to maintainabilty and flexibility.  It was my task to gather a team, redesign, and redeploy their platform within a very restricted time framce.  We successfully hit our deadlines going above and beyond our primary goals.  Today lottogopher is a publicly traded company under the symbol LOTO with a market cap of ~13 million dollars.
                  </p>
                  <ul>
                    <li>Q3 2012 - Took over as CTO for Lottogopher.  Recruited engineering team.</li>
                    <li>Q4 2012 - Redesigned and developed codebase for Lottogopher.</li>
                    <li>Q1 2013 - Released new version.</li>
                    <li>Q2 2013 - Transitioned away from Lottogopher back to EngageBDR.</li>
                  </ul>
                </RB.ListGroupItem>
                <RB.ListGroupItem>
                  <h3>Other highlights</h3>
                  <ul>
                    <li>Senior full stack developer under a WINDOWS environment</li>
                    <li>Senior full stack developer for valueclick (now "Conversant")</li>
                    <li>Senior full stack developer at Slingshot Labs, an incubator</li>
                    <li>Engineering Laboratory Technician.  USS Enterprise CVN-65.  Persian Gulf War</li>
                    <li>
                      <ul>
                        <li>Navy Achievement Medal (Received twice as commendations for various tasks - classified)</li>
                        <li>Good Conduct Medal</li>
                        <li>Navy Sea Service Ribbon</li>
                        <li>Joint Expeditionary Medal</li>
                        <li>NATO Award</li>
                        <li>National Defense Service Medal</li>
                      </ul>
                    </li>
                  </ul>
                </RB.ListGroupItem>
                <RB.ListGroupItem>
                  <h3>Education</h3>
                  <ul>
                    <li>PhD candidate Computer Science, University of Kentucky.  All but dissertation.</li>
                    <li>Naval Nuclear Power School (US Navy)</li>
                  </ul>
                </RB.ListGroupItem>
              </RB.ListGroup>
            </RB.Col>
          </RB.Row>
        </RB.Grid>
      </div>
    )
  }
}

export default Cv;
