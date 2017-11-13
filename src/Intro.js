import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class Intro extends Component {

  render() {
    return (
      <div>
        <RB.Grid>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <RB.Jumbotron>
                <h1>Kenneth Kwan</h1>
                <p>Los Angeles, California</p>
              </RB.Jumbotron>
            </RB.Col>
          </RB.Row>
          <RB.Row>
            <RB.Col md={10} mdOffset={1}>
              <h2>Philosophy</h2>
              <h3>Q4 2017</h3>
              <p>
                CPU speeds (frequency) has seen a divergence from Moore&apos;s law.  Seemingly, issues occur at the quantum level when packing more transistors and increasing the clock frequency.  In terms of raw speed, it seems that it has hit a ceiling.
              </p>
              <p>
                However, Moore&apos;s law seems to be unbounded and moving along at a healthy pace when it comes to innovations in applications, systems, and languages.  Alebit difficult to quantitatively measure, it is only in the recent past have we seen an explosion of technologies in the digital, Internet driven ecosystem.  
              </p>
              <p>
              Arguably driven by the advent of pocket computers (aka smartphones), the world has seen disruptive technologies boring down on the market at an unprecedented pace.  Hundreds (if not thousands) of new apps are coming out of the market on almost a daily basis.  Digital telecommunications have invaded our lives and here to stay.
              </p>
              <p>
                These new innovations come with its own set of problems and many solutions.
              </p>
              <p>
                Within just the last 2 years, the typical development stacks for web applications have shifted dramatically.  While Apache, MySQL, and PHP was once the king of the web development stack, we have seen a shift to the MEAN/MERN stack today.  A completely different paradigm of development which consequently ushered in different tools, languages, and frameworks.  These new technologies that the cool kids are using these days are driven by the desire to create faster, with scalability, performance, and maintainability in mind.  We want to put out applications that people can use without all the pain and tediousness that comes with the development cycle.  We want it now, we want it fast, and it should always work.
              </p>
              <p>
                Take for example GoLang and Node.js.  These are two mutually exclusive programming languages that present different paradigms.  They both solve the issue of concurrent, asynchronous programming to achieve better scalability and garner as much performance from the least amount of resources as possible.  While GoLang (Go) was built with concurrency using an explicit coroutine model (known as go routines), Node.js&apos; original implementation is built around a single threaded approach.  Both languages contain features that help alleviate the painful problems that arise with concurrent programming.  Namingly race conditions, deadlocks, et al.  While Go uses Go Routines and channels, Node uses callbacks.  Both have their own merits and drawbacks, but the phenomenon is the adoption rates and transitions of tech stacks from the old to the new.  Adoption of new tools, languages, and features are moving at an exponentional pace (Moore&apos;s Law).
              </p>
              <p>
                In the past, startups required that a significant portion of its capital be dedicated to infrastructure.  Within the last few years, cloud computing has abstracted away the physical hardware layer.  Amazon Web Services, Google Compute Engine (et al.) provide services that abstract the idea of a &quot;server&quot; itself!  It is indeed an amazing time we live in.  
              </p>
              <p>
                Alongside these major technolgies, you have react, redux, HTTP 2.0, IPv6, angular, docker, kubernetes, mongodb, cassandra, react-native, block-chains, deep learning, AWS lambda, cloud storage, terraform, ad nauseum.  The aforementioned list is nowhere near complete on what is out there and can be leveraged today.  
              </p>
              <p>
                Full stack development is arguably one of the more intensive disciplines in terms of education.  A full stack developer has to know how multiple technologies work together.  Each of these technologies require learning curves that may require years to truly master.  Once mastered, will another stack render it obsolete?
              </p>
              <p>
                This begs another question, how do you know that you have the right tool for the right job AND future-proof it?
              </p>
              <p>
                You cannot.
              </p>
              <p>
                Strategically, the CTO must set the technology for today AND the future.  Tactically, the CTO must allocate resources; management of human and non-human capital to achieve the mission of the company for the present and the future is required.  At times, a good CTO will lead from the front.  Get into the trenches with most junior developer.  While ensuring that he or she can see the forest from the trees, a great CTO will also know when to delegate.
              </p>
              <p> While a good CTO can get the technology job done, a great CTO understands that technology requires humans, which in turn requires interpersonal communcation and public speaking.
              </p>
              <p>
                Think strategically, delegate tactically, create and observe trends, and bridge the gap between humans and machines is the creed that a great CTO must abide by in order to provide a dominant position in the market.  Many have tried and failed.  The failures are simply because they had missed or forgot about one part of the creed.  Success or failure rrequires that all parts of the creed are observed and practiced.  
              </p>
            </RB.Col>
          </RB.Row>
        </RB.Grid>
      </div>
    )
  }
}

export default Intro;
