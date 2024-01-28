import './App.css';
import React, { lazy, Suspense } from 'react';

const Web = lazy(() => import('./resources/web'))

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Web />
    </Suspense>
    </>
  );
}

export default App;
