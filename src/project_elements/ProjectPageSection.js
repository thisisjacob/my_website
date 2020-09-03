import React from 'react';
import ProjectContainer from './ProjectContainer.js';


function ProjectPageSection(props) {
	return (
		<div name="project section" class="border border-dark rounded p-4">
			<div name="project introduction" class="p-4">
				<h2>Projects</h2>
				<p>All of my programming projects!</p>
			</div>
			<div name="featured projects" class="border border-primary p-4">
				<h3>Featured Projects</h3>
				<p>Some of my special projects.</p>
				<ProjectContainer/>
			</div>
			
			<div name="other projects" class="border border-primary p-4">
				<h3>Other Projects</h3>
				<div name="other projects list" class="list-group">
					<a href='#' class="list-group-item list-group-item-action">Testing1</a>
					<a href='#' class="list-group-item list-group-item-action">Testing2</a>
					<a href='#' class="list-group-item list-group-item-action">Testing3</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectPageSection
