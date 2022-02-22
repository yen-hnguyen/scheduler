import React from 'react';

export default function DayListItem(props) {
  return (
    <li>
      <h2 onClick={() => props.setDay(props.name)} className='text--regular'>
        {props.name}
      </h2>
      <h3 className='text--light'>{props.spots} spots remaining</h3>
    </li>
  );
}
