import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  Routes, Navigate } from 'react-router-dom';
import store from './app/store';
import ToDos from './routes/ToDos/Todos';
import AddToDo from './routes/AddToDo/AddToDo';
import PreviewToDo from './routes/PreviewToDo/PreviewToDo';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/todos" element={<ToDos />} />
          <Route path="/todo/:id" element={ <PreviewToDo/>} />
          <Route path="/todo/create" element={<AddToDo />} /> 
          <Route path="*" element={<Navigate to="/todos" />} />
        </Routes>
      </Router>
    </div>
  </Provider>

  // </React.StrictMode>
);
