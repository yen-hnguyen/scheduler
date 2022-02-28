import React from 'react';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';

import 'components/Appointment/styles.scss';

export default function Appointment(props) {
  const SHOW = 'SHOW';
  const EMPTY = 'EMPTY';
  const CREATE = 'CREATE';

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className='appointment'>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={[]} onCancel={() => back(EMPTY)} />
      )}
    </article>
  );
}
