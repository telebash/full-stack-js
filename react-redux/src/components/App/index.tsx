import React from 'react';
import ThemeToggle from '../ThemeToggle';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header container my-10 flex flex-row justify-center">
        <h1 className="text-3xl font-bold underline text-center mr-4">Hello world!</h1>
        <ThemeToggle />
      </header>
    </div>
  );
}

export default App;
