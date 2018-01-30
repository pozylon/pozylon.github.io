import React from 'react';
import pure from 'recompose/pure';
import Layout from '../components/_layout';
import Skill from '../components/Skill';
import Progress from '../components/Progress';
import Timeline, { Item } from '../components/Timeline';
import Experience from '../components/Experience';
import Startup from '../components/Startup';

const Index = () => (
  <Layout title="Pascal creates Web Apps">
    <header>
      <h1>pascal.earth</h1>
      <p>Full stack developer from Zurich (Switzerland)</p>
      <address>
        Pascal Kaufmann<br />
        c/o Reactive Code GmbH<br />
        Sihlquai 131<br />
        8005 Zürich<br />
        <br />
        <a href="mailto:pascal@reactive.one">pascal@reactive.one</a><br />
        <a href="https://reactive.one">reactive.one</a><br />
      </address>
    </header>
    <section>
      <h2>Personal Statement</h2>
      <p>
        I love everything that has to do with IT. Beginning at age 5 I learned how to
        start computer games on my dad's PC (DOS shell). Since then I explored almost every
        aspect in computing. I graduated as a System Engineer, then entered the
        parallel world of SAP consulting, tried my best as a team leader at a big company,
        studied a bit in economics before finally turned back to 100% coding.
        With more than 10 years of professional software development experience, I
        still feel truly passionate and hungry about software craftsmanship.
      </p>
    </section>
    <section>
      <h2>My Specialties</h2>
      <ul>
        <li>Web Applications <small>Coding</small></li>
        <li>B2B Integrations <small>Architecture, Consulting & API Integration</small></li>
        <li>Dev-ops <small>Containers</small></li>
      </ul>
    </section>
    <section>
      <h2>Engineering Skills</h2>
      <div className="engineering">
        <div>
          <h3>Coding</h3>
          <Skill points={7}>React</Skill>
          <Skill points={4}>CSS</Skill>
          <Skill points={2}>Sketch</Skill>
          <Skill points={7}>Node</Skill>
          <Skill points={7}>GraphQL</Skill>
          <Skill points={6}>MongoDB</Skill>
          <Skill points={4}>PostgreSQL</Skill>
          <Skill points={6}>Swift</Skill>
          <Skill points={5}>Objective-C</Skill>
          <Skill points={7}>RESTful JSON</Skill>
          <Skill points={3}>PHP</Skill>
          <Skill points={3}>Python</Skill>
          <Skill points={2}>Go</Skill>
        </div>
        <div>
          <h3>Knowledge</h3>
          <Skill>Project Management (up to 500 KCHF volumina)</Skill>
          <Skill>Lead Engineering</Skill>
          <Skill>Micro-service Architectures</Skill>
          <Skill>Web Security Auditing (SQL Injection, XSS, XSF, ...)</Skill>
          <Skill>Supply-chain integration (API, EDI, SAP)</Skill>
          <Skill>Software Architecture & Continous Delivery</Skill>
        </div>
      </div>
    </section>
    <section>
      <h2>Language Skills</h2>
      <div className="languages">
        <Progress percentage={100} size="200px">
          <p>German</p>
          <small>Mother Language</small>
        </Progress>
        <Progress percentage={75} size="200px">
          <p>English</p>
          <small>Advanced level</small>
        </Progress>
        <Progress percentage={25} size="200px">
          <p>French</p>
          <small>Basic level</small>
        </Progress>
      </div>
    </section>
    <section>
      <h2>Education</h2>
      <Timeline>
        <Item from="2010.08" to="2014.08">
          <p>Eidg. dipl. Wirtschaftsinformatiker HF</p>
          <small>IFA Zürich</small>
        </Item>
        <Item from="2003.08" to="2007.08">
          <p>Lehre Informatiker Systemtechnik</p>
          <small>Berufsschule Uster</small>
        </Item>
      </Timeline>
    </section>
    <section>
      <h2>Work experience</h2>
      <div className="work">
        <Experience years={4}>
          <p>Founder at <a href="https://reactive.one">Reactive Code GmbH</a></p>
          <p>Web Applications & native Apps</p>
        </Experience>
        <Experience years={2}>
          <p>Team Leader Mobile Process Integration at <a href="https://swisscom.com">Swisscom AG</a></p>
          <p>Various native iOS Apps & API integration</p>
        </Experience>
        <Experience years={4}>
          <p>
            SAP Consultant at <a href="https://swisscom.com">Swisscom AG</a>.
            Tech consulting and ABAP development in SAP R/3.
            Consulting for: SAP Portal, T-Rex, XI/PI
          </p>
        </Experience>
      </div>
      <small>Just drop me an E-Mail if you want specific references and cases, I will happily show it to you</small>
    </section>
    {/* <section>
      <h2>Startups launched</h2>
      <Startup>
          KidsPilot
      </Startup>
      <Startup>
          Koovala
      </Startup>
      <Startup>
          Dagobird
      </Startup>
    </section> */}
    <footer>
      <center>Pascal Kaufmann 2018</center>
    </footer>
    <style jsx>{`
      .engineering {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .engineering > * {
        min-width: 300px;
      }
      .languages {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .work {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </Layout>
);

export default pure(Index);
