import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {MainMenu} from './containers/MainMenu';
import {GameOver} from './containers/GameOver';
import {Review} from './containers/Review';
import {Pause} from './containers/Pause';
import {Quiz} from './containers/Quiz';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <HashRouter
    basename={process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL}
  >
    <Routes>
      <Route path="/game">
        <Route path="over" element={<GameOver />} />
        <Route path="pause" element={<Pause />} />
        <Route path="quiz/:kana/:seed" element={<Quiz />} />
      </Route>
      <Route path="/review/:kana/:id" element={<Review />} />
      <Route path="/*" element={<MainMenu />} />
    </Routes>
  </HashRouter>
);
