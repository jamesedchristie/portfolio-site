import React from 'react';

import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <section id="educationSection">
        <h3>Education</h3>
        <ul id="accordionEducation">
          <li>
            <strong>Diploma - Software Development</strong>
            <span>Petersham TAFE</span>
            <span>2021</span>
            
              <p>
                A full-time course covering .NET Core, EF Core, MVC, React,
                React Native, Testing, Validation and Project Moanagement.
              </p>
          </li>
          <li>
            <strong>Certificate IV - Programming</strong>
            <span>Petersham TAFE</span>
            <span>2020</span>
            
              <p>
                A full-time course covering .NET Core, EF Core, MVC, React,
                React Native, Testing, Validation and Project Moanagement.
              </p>
          </li>
          <li>
            <strong>Certificate - CS50x Intro to Computer Science</strong>
            <span>edX (Harvard)</span>
            <span>2020</span>
            
              <p>
                A full-time course covering .NET Core, EF Core, MVC, React,
                React Native, Testing, Validation and Project Moanagement.
              </p>
          </li>
          <li>
            <strong>PhD - History of Science</strong>
            <span>The Warburg Institute, London</span>
            <span>2015-2018</span>
            
              <p>
                A full-time course covering .NET Core, EF Core, MVC, React,
                React Native, Testing, Validation and Project Moanagement.
              </p>
          </li>
          <li>
            <strong>Masters - Early Modern History</strong>
            <span>The Warburg Institute, London</span>
            <span>2012-13</span>
            
              <p>
                A full-time course covering .NET Core, EF Core, MVC, React,
                React Native, Testing, Validation and Project Moanagement.
              </p>
          </li>
          <li>
            <strong>Bachelor of Arts (Hons)</strong>
            <span>The University of Sydney</span>
            <span>2007-2011</span>
            
              <p>
                A full-time course covering .NET Core, EF Core, MVC, React,
                React Native, Testing, Validation and Project Moanagement.
              </p>
          </li>
        </ul>
      </section>
      <section id="workSection">
        <h3>Work</h3>
        <ul>
          <li>
            <strong>Research Assistant</strong>
            <span>The University of Sydney</span>
            <span>2019-2020</span>
           
              <p>
                A full-time course covering .NET Core, EF Core, MVC, React,
                React Native, Testing, Validation and Project Moanagement.
              </p>
          </li>
          <li>
            <strong>Hospitality</strong>
            <span>Various</span>
            <span>2008-present</span>
            
              <p>
                A full-time course covering .NET Core, EF Core, MVC, React,
                React Native, Testing, Validation and Project Moanagement.
              </p>
          </li>
        </ul>
      </section>
      <section id="interestsSection">
        <h3>Interests</h3>
        <p>My interests include...</p>
      </section>
    </Layout>
  );
}
