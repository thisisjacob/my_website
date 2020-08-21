import React from 'react';
import Project from './project_elements/Project.js';
import ProjectContainer from './project_elements/ProjectContainer.js';

function ProjectsSection(props) {
	return (
		<section id="projects">
			<h2>Projects</h2>
			<ProjectContainer projectInfoObjects={props.projectInfoObjects} />
		</section>
	);
}

export default ProjectsSection;
