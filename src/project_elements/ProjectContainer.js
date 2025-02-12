import React from 'react';
import Project from './Project.js';

import { projectRowWidth } from '../data_classes/project_options.js';
import { projectsList } from '../data_classes/project_objects.js';

function ProjectContainer(props) {
	const width = projectRowWidth;
	const items = projectsList;
	
	var currentRowCount = 0;
	var itemsByRow = [];
	var currentRowItems = [];
	
	for (let i = 0; i < items.length;) {
		currentRowCount++;
		if (currentRowCount <= width) {
			currentRowItems.push(items[i]);
			i++;
		}
		else {
			currentRowCount = 0;
			itemsByRow.push(currentRowItems);
			currentRowItems = [];
		};
	}
	// needed when number of items is not divisable by the width
	if (currentRowItems.length > 0) {
		itemsByRow.push(currentRowItems);
	}
	
	const projectRows = itemsByRow.map((itemGroup) => 
		itemGroup.map((item) =>
			<div name="project" class="col-{width}">
			<Project projectName={item.title} 
			imageLocation={item.imageLocation}
			linkLocation={item.linkDestination}
			altText={item.altText} />
			</div>
		)
	);
	
	
	const projects = projectRows.map((rows) => 
		<div name="project rows" class="row mt-3">
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
