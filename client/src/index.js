import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

//ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='back_div'>
      <App />
    </div>
  </React.StrictMode>
);