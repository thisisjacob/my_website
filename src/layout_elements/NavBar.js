import React from 'react';

function NavBar() {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
			<a class="navbar-brand" href="#">Jacob's Website</a>
			<div class="navbar-nav">
				<a class="nav-link active" href="#">Home</a>
				<a class="nav-link active" href="#projects_section">Projects</a>
			</div>
		</nav>
	);
}

export default NavBar
