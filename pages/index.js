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
      <h1>Pascal Kaufmann</h1>
      <small>Software Engineer</small>
      <address>
        Pascal Kaufmann
        c/o Reactive Code GmbH
        Sihlquai 131
        8005 Zürich

        <a href="mailto:pascal@reactive.one">pascal@reactive.one</a>
        <a href="reactive.one">reactive.one</a>
      </address>
    </header>
    <section>
      <h2>Personal Statement</h2>
      <p>25 years old Art Director & Freelance Designer from
          Valladolid (Spain) currently based in Madrid. I love everything that has
          to do with Web design & development, Graphic design, Packaging, Industrial
          design and I feel a true devotion for typography.
          I have 4 years of experience working as a freelance and working on an studio,
          but and I’m ready for visiting other countries & work for any design studio!
          I love working with people, specially
          if they have the same passion I have for what they do.
          Why dont we work together? Go futher down to see why I am the man you need to hire!
      </p>
    </section>
    <section>
      <h2>My Specialties</h2>
      <p>Web Applications, B2B Integration, Devops</p>
    </section>
    <section>
      <h2>Engineering Skills</h2>
      <div className="engineering">
        <h3>Coding</h3>
        <Skill points={0}>React</Skill>
        <Skill points={1}>Node</Skill>
        <Skill points={2}>GraphQL</Skill>
        <Skill points={3}>MongoDB</Skill>
        <Skill points={4}>PostgreSQL</Skill>
        <Skill points={5}>Swift</Skill>
        <Skill points={5}>RESTful JSON</Skill>
        <h3>Knowledge</h3>
        <Skill>Project Management (up to 500 KCHF volumina)</Skill>
        <Skill>Lead Engineering</Skill>
        <Skill>Micro-service Architectures</Skill>
        <Skill>Web Security Auditing (SQL Injection, XSS, XSF, ...)</Skill>
        <Skill>Supply-chain integration (API, EDI, SAP)</Skill>
        <Skill>Software Architecture & Continous Delivery</Skill>
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
          <p>IFA Zürich</p>
        </Item>
        <Item from="2003.08" to="2007.08">
          <p>Lehre Informatiker Systemtechnik</p>
          <p>Berufsschule Uster</p>
        </Item>
      </Timeline>
    </section>
    <section>
      <h2>Work experience</h2>
      <Experience years={4}>
        <p>Founder at <a href="https://reactive.one">Reactive Code GmbH</a></p>
        <p>Web Applications & native Apps</p>
      </Experience>
      <Experience years={2}>
        <p>Team Leader Mobile Process Integration at <a href="https://swisscom.com">Swisscom AG</a></p>
        <p>Various native iOS Apps & proprietary API integration</p>
      </Experience>
      <Experience years={5}>
        <p>SAP Consultant at <a href="https://swisscom.com">Swisscom AG</a></p>
        <p>Tech consulting and development for the following R/3 modules: HR, SD, PP, MM.
          Consulting for: SAP Portal, T-Rex, XI/PI</p>
      </Experience>
      <small>Please visit <a href="https://pave.tech">Pave Studios for project descriptions</a></small>
    </section>
    <section>
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
    </section>
    <footer>
      Pascal Kaufmann 2018
    </footer>
    <style jsx>{`
      .engineering {
        max-width: 400px;
      }
      .languages {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    `}</style>
  </Layout>
);

export default pure(Index);
