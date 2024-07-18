import React from "react";
import { technologies } from '../content';

const Technologies = () => (
    <>
        <h1 className="page-title">Fluent in</h1>
        <div className="technologies">
            {technologies.map((technology) => (
                <div key={technology.title}>
                    <h2>{technology.title}</h2>
                    <ul>
                        {technology.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </>

);

export default Technologies;