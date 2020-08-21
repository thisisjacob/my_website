import React from 'react';
import './App.css';
import Introduction from './Introduction.js';
import ProjectPageSection from './project_elements/ProjectPageSection.js';

function App(props) {
  var testing = [];
  return (
  	<main class="container" role="main">
		<Introduction />
		<ProjectPageSection projectInfoObjects={props.projectInfoObjects}/>
	</main>
  );
}

export default App;
