import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './layout.css';
import App from './App';
import NavBar from './layout_elements/NavBar';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import projects from './data_classes/project_objects.js';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App projectInfoObjects={projects}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
