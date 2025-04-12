
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>,

    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>Button Component Test</h1>
      
      {/* Basic variants */}
      <div>
        <Button >Default Primary</Button>
        <br/>
        <Button variant="secondary">Secondary</Button>
        <br/>
        <Button variant="destructive">Destructive</Button>
      </div>

      {/* With icons */}
      <div>
        <Button leftIcon="CaretLeft">Back</Button>
        <Button rightIcon="ArrowRight">Next</Button>
      </div>

      {/* States */}
      <div>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    </div>
  );
}

export default App;
