import React from "react";
import '../../styles/timeline.scss';
import TimelineCard from './TimelineCard';

const Timeline = () => {
  return (    
    <section className="timeline">
        <TimelineCard
          employer="Policygenius"
          jobTitle="Software Engineer"
          skills={['JavaScript', 'Ruby', 'CSS', 'React', 'Ruby on Rails', 'Go']}
          content={[
            'Accelerated application development by building UI component libraries for both React and Angular 2',
            'some content'
          ]}
          align="right"
        />
        <TimelineCard
          employer="CA Technologies"
          jobTitle="Associate Software Engineer"
          skills={['JavaScript', 'HTML', 'CSS', 'React', 'Angular 2']}
          content={[
            'Accelerated application development by building UI component libraries for both React and Angular 2',
            'some content'
          ]}
          align="left"
        />
        <TimelineCard
          employer="University at Buffalo"
          jobTitle="Computer Science Major"
          skills={['C', 'C++', 'Java',]}
          content={[
            "Graduated with a bachelor's and master's in Computer Science.",
          ]}
          align="right"
        />
        <TimelineCard
          employer="Liazon"
          jobTitle="Software Engineer Intern"
          skills={['C#', 'JavaScript', 'ASP.NET', 'MySQL']}
          content={[
            "Developed new features for their private benefits exchange platform.",
            "Enabled more users to effectively use their platform by adding new medical insurance features.",
          ]}
          align="left"
        />
        <TimelineCard
          employer="Northrop Grumman Corporation"
          jobTitle="Software Engineer Intern"
          skills={['C#', 'MySQL']}
          content={[
            "Led a team to build a desktop application which enabled users to monitor the status of integrated circuit production in relation to their schedules near real time",
            "Enabled more users to effectively use their platform by adding new medical insurance features.",
          ]}
          align="right"
        />
        <TimelineCard
          employer="Northrop Grumman Corporation"
          jobTitle="Software Engineer Intern"
          skills={['C#', 'MySQL']}
          content={[
            "Developed an inventory management program to enable employees to see the status of their stockrooms",
          ]}
          align="left"
        />
    </section>
  )
};

export default Timeline;
