import React from 'react';
import './styles/LandingPage.css';

const App = () => {  
  return (
    <div className="container">
      <h1 className="title">{`Welcome to ${process.env.repo_name}!`}</h1>
      <p className="subtitle">Your journey to build something amazing starts here 🚀</p>

      <div className="section">
        <h2>Quick Start Guide</h2>
        <ol>
          <li>Run <code>npm start</code> to start the development server.</li>
          <li>Edit <code>src/App.js</code> to customize your app.</li>
          <li>Deploy with <code>npm run deploy</code>.</li>
        </ol>
      </div>

      <button className="button" onClick={() => alert('Happy coding!')}>
        Start Building 🚀
      </button>
    </div>
  );
};

export default App;
