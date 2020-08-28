import React from 'react';
import Project from './Project.js';
import image from '../logo192.png';

function ProjectContainer(props) {
	const width = 3; //set to be passed by prop later
	var currentRowCount = 0;
	var itemsByRow = [];
	var currentRowItems = [];
	
	for (let i = 0; i < props.items.length; i++) {
		currentRowCount = currentRowCount + 1;
		if (currentRowCount <= width) {
			currentRowItems.push(props.items[i]);
		}
		else {
			currentRowCount = 0;
			itemsByRow.push(currentRowItems);
			currentRowItems = [];
		};
		//console.log(currentRowItems);
		//console.log(i);
	}
	
	const projectRows = itemsByRow.map((itemGroup) => 
		itemGroup.map((item) =>
			<div name="project row" class="row">
			<Project projectName={item.title} 
			imageLocation={item.imageLocation}
			linkLocation={item.linkDestination}
			altText={item.altText} />
			</div>
		)
	);
	
	
	const projects = projectRows.map((rows) => 
		<div name="project rows" class="row">
			{rows}
		</div>
	);
	
	return (
		<div class="container">
				{projects}
		</div>
	);
}

export default ProjectContainer
