import React from "react";
import './timeline.scss';
import TimelineCard from './TimelineCard';

const Timeline = () => {
  return (    
    <section className="timeline">
        <TimelineCard
          employer="Policygenius"
          timePeriod="August 2017 - Present"
          jobTitle="Software Engineer"
          skills={['JavaScript', 'React', 'Ruby', 'Rails', 'Go', 'CSS', 'Postgres', 'Gatsby', 'Contentful']}
          content={[
            'Core developer of the Home and Auto team, responsible for creating a React SPA and backend infrastructure in Rails and Go',
            'Built the Content Platform using GatsbyJS and Contentful to improve publishing of content',
            'Rebranded entire site, including product flows, landing pages, content pages, etc. by restyling using CSS',
            'Developed centralized development environment using Kubernetes and port forwarding to reduce number of microservices needed to run locally',
          ]}
          align="right"
        />
        <TimelineCard
          employer="CA Technologies"
          timePeriod="June 2016 - August 2017"
          jobTitle="Associate Software Engineer"
          skills={['JavaScript', 'HTML', 'CSS', 'React', 'Angular 2']}
          content={[
            'Accelerated application development by building UI component libraries for both React and Angular 2',
            'Built a cross-platform mobile application using Ionic Framework to be accessed by employees throughout the globe',
            'Developed an Atom text editor plugin to improve development speed by auto-completing API calls and documentation',
            'Accelerated 2 startups through their seed funding by prototyping innovative solutions',
            'Mentored and trained interns on web development and software engineering best practices, such as testing with Jasmine and writing clear, concise documentation'
          ]}
          align="left"
        />
        <TimelineCard
          employer="University at Buffalo"
          timePeriod="August 2011 - May 2016"
          jobTitle="Computer Science Major"
          skills={['C', 'C++', 'Java',]}
          content={[
            "Bachelor's of Science in Computer Science.",
            "Master's of Science in Computer Science"
          ]}
          align="right"
        />
        <TimelineCard
          employer="Liazon"
          timePeriod="September 2015 - May 2016"
          jobTitle="Software Engineer Intern"
          skills={['C#', 'JavaScript', 'ASP.NET', 'MySQL']}
          content={[
            "Built feature which enabled a specific customer base to extend their medical insurance to their dependents",
            "Developed feature requests in both frontend and backend for an ASP.NET web application",
          ]}
          align="left"
        />
        <TimelineCard
          employer="Northrop Grumman Corporation"
          timePeriod="Summer 2015"
          jobTitle="Software Engineer Intern"
          skills={['C#', 'MySQL']}
          content={[
            "Developed and led a team to build a desktop application which enabled users to monitor the status of integrated circuit production in relation to their schedules near real time",
            "Effectively communicated with engineering managers and customers to provide an exceptional product that satisfies requirements from multiple clients"
          ]}
          align="right"
        />
        <TimelineCard
          employer="Northrop Grumman Corporation"
          timePeriod="Summer 2014"
          jobTitle="Software Engineer Intern"
          skills={['C#', 'MySQL']}
          content={[
            "Developed an inventory management program to enable employees to see the status of their stockrooms",
            "Implemented a cleaner, more intuitive user interface"
          ]}
          align="left"
        />
    </section>
  )
};

export default Timeline;
