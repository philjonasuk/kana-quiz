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
      {/* <Route path='/app'>
            <Route path='path1' element={ <Somecomponent1 /> } />
            <Route path='path2' element={ <Somecomponent2 /> } />
        </Route> */}
      <Route path="/*" element={<App />} />
    </Routes>
  </HashRouter>
);
