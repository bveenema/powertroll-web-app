// Libs
import { render } from 'react-dom';

// Router
import routes from './router';

// CSS
import '../node_modules/purecss/build/pure.css';
import '../node_modules/purecss/build/grids-responsive-min.css';
import './index.css';

render(
  routes,
  document.getElementById('root')
);
