import React from 'react';

function Project(props) {
	return (
		<div class="col-lg">
			<div class="card" style={{width:250}}>
				<h3 class="card-title">{props.projectName}</h3>
				<img class="card-img" src={props.imageLocation}></img>
				<a href={props.linkLocation}>Link</a>
			</div>
		</div>
	);
}

export default Project
