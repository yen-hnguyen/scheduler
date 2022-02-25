import React from 'react';
import InterviewerListItem from './InterviewerListItem';

import 'components/InterviewerList.scss';

export default function InterviewerList(props) {
  const interviewerListArr = props.interviewers.map((obj) => {
    return (
      <InterviewerListItem
        key={obj.id}
        avatar={obj.avatar}
        name={obj.name}
        selected={obj.id === props.value}
        setInterviewer={() => props.onChange(obj.id)}
      />
    );
  });

  return (
    <section className='interviewers'>
      <h4 className='interviewers__header text--light'>Interviewer</h4>
      <ul className='interviewers__list'>{interviewerListArr}</ul>
    </section>
  );
}
