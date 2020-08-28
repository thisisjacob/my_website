import React from 'react';
import ProjectContainer from './ProjectContainer.js';


function ProjectPageSection(props) {
	return (
			<ProjectContainer items={props.projectInfoObjects} />
	);
}

export default ProjectPageSection
