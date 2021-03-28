import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UserProvider} from './context_api/user'
import { PlantProvider} from './context_api/plants'


ReactDOM.render(
  <React.StrictMode>
      <PlantProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </PlantProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

