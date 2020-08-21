import React from 'react';
import ProjectContainer from './ProjectContainer.js';


function ProjectPageSection(props) {
	const rowWidth = 3;
	const rowsNum = props.projectInfoObjects.length % rowWidth;
	return (
		<div class="container-lg">
			<ProjectContainer />
		</div>
	);
}

export default ProjectPageSection
