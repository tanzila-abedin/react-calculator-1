import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const home = renderer
    .create(<div><h1>Welcome to Math-Magicians</h1></div>)
    .toJSON();
  expect(home).toMatchSnapshot();
});
