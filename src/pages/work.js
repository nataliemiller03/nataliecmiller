import React from "react";
import { workExperienceContent } from '../content';

const Work = () => (
    <>
        <h1 className="page-title">Work Experience</h1>
        {workExperienceContent.map((workItem) => (
            <div key={workItem.employer}>
                <h2>{workItem.employer}</h2>
                <h3>{workItem.title}</h3>
                {workItem.bullets ? (
                    <ul>
                        {workItem.bullets.map((bullet) => <li>{bullet}</li>)}
                    </ul>
                ) : (
                    <div className="spacer" />
                )}
            </div>
        ))}
    </>
);

export default Work;