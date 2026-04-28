import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './app';

console.log("Last docker image tag was: f29bed5a305a728ea8b20ae003f5f0f727a42959")
const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.Suspense>
    <App />
  </React.Suspense>,
);
