import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import store from './redux-store/store';
// import ToDos from './routes/ToDos/Todos';
// import AddToDo from './routes/AddToDo/AddToDo';
// import PreviewToDo from './routes/PreviewToDo/PreviewToDo';
import './index.css'
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App/>
    {/* <div className="main-container">

      <Router> */}
        {/* <Routes> */}
          {/* <Route path="/todos" element={     <App /> } /> */}
          {/* <Route path="/todo/:id" element={ <PreviewToDo/>} />
          <Route path="/todo/create" element={<AddToDo />} />  */}
          {/* <Route path="*" element={<Navigate to="/todos" />} />
        </Routes>
      </Router> */}
    {/* </div> */}
  </Provider>

  // </React.StrictMode>
);
