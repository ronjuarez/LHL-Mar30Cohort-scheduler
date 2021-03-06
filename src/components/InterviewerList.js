import React from "react";
import InterviewerListItem from "components/InterviewerListItem"
import 'components/InterviewerList.scss';
import PropTypes from "prop-types";



export default function InterviewerList ({ 
  interviewers,
  interviewer,
  setInterviewer 
}) {
  const intListItems = interviewers.map(intItem => (
    <InterviewerListItem
      id={intItem.id}
      name={intItem.name}
      avatar={intItem.avatar}
      selected={intItem.id === interviewer}
    // Here we wrap setInterviewer in an anon function direct our prop to use setInterviewer as a function.      
      setInterviewer={() => setInterviewer(intItem.id)}
    />
  ))
    return (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">
          { intListItems }
        </ul>
      </section>
  );
}

InterviewerList.propTypes = {
  interviewer: PropTypes.number,
  setInterviewer: PropTypes.func.isRequired
};