import Display from './Display';
import ButtonPanel from './ButtonPanel';

const result = '0';

const App = () => (
  <div className="App">
    <header className="App-header">
      Calculator built using React
    </header>
    <Display result={result} />
    <ButtonPanel />
  </div>
);

export default App;
