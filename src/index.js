// import react from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'));

import React from "react";
import { createRoot } from 'react-dom/client'
import Loading from "./components/Loading"
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
// ReactDOM.render(
//       <App />,
//   document.getElementById("root")
// );

root.render(
    <App />
)
