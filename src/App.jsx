import React, { Suspense, lazy } from 'react';
import { Loader } from './Loader';
const Experience = lazy(() => import('./components/Experience'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Experience />
    </Suspense>
  );
}

export default App;