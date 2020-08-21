import React from 'react';
import './App.css';
import Introduction from './Introduction.js';
import ProjectsSection from './ProjectsSection.js';

function App() {
  var testing = [];
  return (
  	<main class="container" role="main">
		<Introduction />
		<ProjectsSection projectInfoObjects={testing}/>
	</main>
  );
}

export default App;
