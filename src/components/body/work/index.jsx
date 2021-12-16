import React from 'react';
import Separator from '../../common/separator';
import {WorkData} from '../../data/work'
import WorkCard from './work-card'
import './style.scss'
function Work() {
  const data = WorkData
  return (
    <div className="work">
      <Separator/>
      <label className="section-title">Work is in progress</label>
      <div className="work-list">
        {data.map((item) =>{
          return <WorkCard item={item}/>
        })}
      </div>
    </div>
  );
}

export default Work;
