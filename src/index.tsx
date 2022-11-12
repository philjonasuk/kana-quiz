import React from "react";
import { App } from "./containers/App";
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router basename={process.env.PUBLIC_URL}>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Router basename={process.env.PUBLIC_URL}><App /></Router>);