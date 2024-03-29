import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';
// import 'three/examples/jsm/utils/BufferGeometryUtils.js';
// import * as BGU from 'three/examples/jsm/utils/BufferGeometryUtils.js';
// import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
// import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

// v18.12.1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas>
      <App />
    </Canvas>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
