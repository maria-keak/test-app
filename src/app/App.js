import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import ToDos from "../containers/Lists/Todos";
import PreviewToDo from "../containers/Preview/PreviewToDo";
import CreateToDo from '../containers/Create/CreateToDo';
import { MainContainer } from './style.js';

function App() {

    return (
       <MainContainer>
            <Router>
                <Routes>
                    <Route path="/todos" element={<ToDos />} />
                    <Route path="/todo/:id" element={<PreviewToDo />} />
                    <Route path="/todo/create" element={<CreateToDo />} />
                    <Route path="*" element={<Navigate to="/todos" />} />
                </Routes>
            </Router>
        </MainContainer>
    )
}

export default App