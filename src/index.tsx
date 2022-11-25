import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {App} from './containers/App';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <HashRouter
    basename={process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL}
  >
    <Routes>
      <Route path="/game" element={<div>quiz</div>}>
        <Route path="over" element={<div>game over</div>} />
        <Route path="pause" element={<div>pause</div>} />
      </Route>
      <Route path="/review" element={<div>review</div>} />
      <Route path="/*" element={<App />} />
    </Routes>
  </HashRouter>
);
