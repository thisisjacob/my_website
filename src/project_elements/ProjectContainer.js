import React from 'react';
import Project from './Project.js';
import image from '../logo192.png';

function ProjectContainer(props) {
	const projects = props.items.map((item) => 
		<Project projectName={item.title} 
		imageLocation={item.imageLocation}
		linkLocation={item.linkDestination}
		altText={item.altText}
		/>
	);
	
	return (
		<div class="row">
			{projects}
		</div>
	);
}

export default ProjectContainer
