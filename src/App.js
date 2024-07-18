import React from 'react';
import Tabs from '../src/app/tabs';
// import './App.scss';

function App() {
  return (
    <div className="content">
      <main>
        <Tabs />
      </main>
      <footer aria-label="Contact Information">
        <a href="mailto:me@nataliecmiller.com">me@nataliecmiller.com</a>
      </footer>
    </div>
  );
}

export default App;
