import React from 'react';

const TimelineCard = (props) => {
  const {
    employer,
    jobTitle,
    skills,
    content,
    align,
  } = props;

  const timelineItemClasses = `timeline-item ${align}`
  return (
    <div className={timelineItemClasses}>
      <div className="timeline-section">
      <div className="circle"/>
      <div className="timeline-item-header">
        <span className="employer">{ employer }</span>
        <span className="job-title">{ jobTitle }</span>
      </div>  
      <div className="content-card-skills-list">
        {
          skills.map(skill => <span>{skill}</span>)
        }
      </div>
      <ul className="content-card-description">
        {
          content.map(description => <li>{ description }</li>)
        }
      </ul>
      </div>
    </div>
  );
};

export default TimelineCard;
