import renderer from 'react-test-renderer';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

it('renders correctly', () => {
  const app = renderer
    .create(
      <div className="App">
        <header>
          <h2>
            Calculator App built using React
          </h2>
          <p>
            Built by Ryel Banfield
          </p>
        </header>
        <div className="calculator">
          <Display />
          <ButtonPanel />
        </div>
      </div>,
    )
    .toJSON();
  expect(app).toMatchSnapshot();
});
