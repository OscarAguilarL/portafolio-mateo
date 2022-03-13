import React from 'react';

import { projects } from '../data';

export const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <section key={project.title}>
          <article>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <button>Ver proyecto</button>
              <button>Ver Código</button>
            </div>
          </article>
          <div>
            <img
              src={project.img}
              alt={project.title}
              width="800"
              height="600"
            />
          </div>
        </section>
      ))}
    </div>
  );
};
