import React from 'react';
import { Layout, AboutSection, EducationItem, WorkItem, Interest } from '../components';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.ico';

export default function About() {
  return (
    <Layout currentPage="about">
      <Helmet>
        <meta charSet='utf-8' />
        <title>About</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <AboutSection title="Education">
          <EducationItem
            qualification="Diploma - Software Development"
            institute="TAFE NSW - Petersham"
            year="2021"
          >
            A full-time course covering .NET Core, EF Core, MVC, React, React
            Native, Testing, Validation and Project Management.
          </EducationItem>
          <EducationItem
            qualification="Certificate IV - Programming"
            institute="TAFE NSW - Petersham"
            year="2020"
          >
            A full-time course covering CS Fundamentals, C#, HTML, CSS,
            JavaScript, React, React Native, Testing, Validation and Object
            Oriented Analysis and Design.
          </EducationItem>
          <EducationItem
            qualification="Certificate - CS50x Intro to Computer Science"
            institute="edX (Harvard)"
            year="2020"
          >
            An intensive introductory Computer Science course, covering CS
            fundamentals, data structures and algorithms, coding in C and
            Python, databases and SQL, as well as units on Web Development with
            Python/Flask/Django, App Development with Java/Android Studio, and
            Games Development with Lua/Love2D.
          </EducationItem>
          <EducationItem
            qualification="PhD - History of Science"
            institute="The Warburg Institute, London"
            year="2015-2018"
          >
            A 3 year doctorate studying the history of astronomy and cosmology
            in the Early Modern period (16th-18th centuries), with a particular
            focus on early theories concerning extraterrestrial life.
          </EducationItem>
          <EducationItem
            qualification="Masters - Early Modern History"
            institute="The Warburg Institute, London"
            year="2012-13"
          >
            A 1 year course covering the intellectual and cultural history of
            Europe, 1300-1650.
          </EducationItem>
          <EducationItem
            qualification="Bachelor of Arts (Hons)"
            institute="The University of Sydney"
            year="2007-2011"
          >
            Seems a long time ago now! In my undergrad degree I majored in
            Medieval Studies and Studies in Religion, taking a particular
            interest in intellectual history.
          </EducationItem>
      </AboutSection>
      <AboutSection title="Work">
          <WorkItem
            role="Research Assistant"
            company="The University of Sydney"
            year="2019-2020"
          >
            An amazing opportunity to work with the Medieval and Early Modern
            Centre, organising research activities and community engagement.
            Sadly cut short by COVID-19.
          </WorkItem>
          <WorkItem
            role="Hospitality"
            company="Various"
            year="2008-2021"
          >
            The way I earned a living during all my years of study. If you're
            looking for people skills and the ability to work under pressure,
            look for a hospo background!
          </WorkItem>
      </AboutSection>
      <AboutSection title="Interests">
          <Interest>
            Reading. Usually fiction
          </Interest>
          <Interest>All things sci-fi</Interest>
          <Interest>Cricket in the summer</Interest>
          <Interest>Swimming in the ocean</Interest>
          <Interest>Figuring out how to make cool stuff on computers</Interest>
      </AboutSection>
    </Layout>
  );
}
