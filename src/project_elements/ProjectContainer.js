import React from 'react';
import Project from './Project.js';
import image from '../logo192.png';

function ProjectContainer(props) {
	return (
		<div class="row">
			<Project projectName={props.items[0].title} 
			imageLocation={props.items[0].imageLocation}
			linkLocation={props.items[0].linkDestination}
			altText={props.items[0].altText}
			/>
			<Project projectName={props.items[1].title} 
			imageLocation={props.items[1].imageLocation}
			linkLocation={props.items[1].linkDestination}
			altText={props.items[1].altText}
			/>
			<Project projectName={props.items[2].title} 
			imageLocation={props.items[2].imageLocation}
			linkLocation={props.items[2].linkDestination}
			altText={props.items[2].altText}
			/>
		</div>
	);
}

export default ProjectContainer
