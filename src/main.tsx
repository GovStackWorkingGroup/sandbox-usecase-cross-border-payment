import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './app';

const dockerImageTag = import.meta.env.VITE_APP_DOCKER_IMAGE_TAG ?? 'unknown';
console.log(`Docker image tag is: ${dockerImageTag}`);
const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.Suspense>
    <App />
  </React.Suspense>,
);
