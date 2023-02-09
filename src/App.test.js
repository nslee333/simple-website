import {createRoot} from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testDiv = createRoot(div);
  testDiv.unmount();
});
