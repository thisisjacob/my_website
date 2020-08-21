import React from 'react';
import Project from './Project.js';
import image from '../logo192.png';

function ProjectContainer(props) {
	return (
		<div class="row">
			<Project projectName="test" 
			imageLocation={image}
			linkLocation="https://www.google.com/" 
			/>
			<Project projectName="test" 
			imageLocation={image}
			linkLocation="https://www.google.com/" 
			/>
			<Project projectName="test" 
			imageLocation={image}
			linkLocation="https://www.google.com/" 
			/>
		</div>
	);
}

export default ProjectContainer
