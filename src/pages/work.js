import React from "react";
import workExperienceContent from '../content';

const Work = () => (
    workExperienceContent.map((workItem) => {
        <div className="work--section">
            <h2>{workItem.employer} - {workItem.titles.map((title) => <span>{title}</span>)}</h2>
            <ul>
                {workItem.bullets.map((bullet) => <li>{bullet}</li>)}
            </ul>
        </div>
    })

);

export default Work;