import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const quote = renderer
    .create(<div><h2>Everything you can imagine is real. – Pablo Picasso</h2></div>)
    .toJSON();
  expect(quote).toMatchSnapshot();
});
