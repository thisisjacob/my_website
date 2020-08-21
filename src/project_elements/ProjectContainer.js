import React from 'react';
import Project from './Project.js';
import image from '../logo192.png';

function ProjectContainer(props) {
	return (
		<div class="container-lg">
			<div class="row">
				<div class="col-lg">
					<Project projectName="test" 
					imageLocation={image}
					linkLocation="https://www.google.com/" />
				</div>
				<div class="col-lg">
					<Project />
				</div>
				<div class="col-lg">
					<Project />
				</div>	
			</div>
		</div>
	);
}

export default ProjectContainer
