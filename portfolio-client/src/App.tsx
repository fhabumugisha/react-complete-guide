import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import ProjectList from './ProjectList/ProjectList';






class App extends React.Component<{}, any> {
  
   render() {  

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <ProjectList/>
    </div>
    );
  }

 
}

export default App;
