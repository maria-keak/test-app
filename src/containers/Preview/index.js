import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ReconciliationTwoTone } from '@ant-design/icons';
import CardComponent from '../../components/Card/index.js';
import { toggleTodoThunk } from '../../redux-store/thunks/mark.js';
import { deleteItemThunk } from '../../redux-store/thunks/deleteItem.js';
import { Desc, StatusText, StyledButton, TodoIdText } from './styled/index.js';
import { previewToDoThunk } from '../../redux-store/thunks/preview.js';


const PreviewToDo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();

    const [todo, setTodo] = useState(null);
    const [todoStatus, setodoStatus] = useState(false);

    useEffect(() => {
        dispatch(previewToDoThunk({ id, successCallback: (finded) => {setTodo(finded); setodoStatus(finded.done) }}))
    }, []);

    const handleDelete = useCallback((todo) => {
        dispatch(deleteItemThunk( { id: todo.id, callback: () => navigate('/todos') } ))     
    }, [dispatch]);

    const handleToggleTodo = useCallback((todo) => {
        todo.done = !todo.done
        setodoStatus(todo.done)
        dispatch(toggleTodoThunk(todo));
    }, []);

    return (

        <CardComponent
            linkTo="/todos"
            linkText="Go back to the entire list"
            linkIcon={<ReconciliationTwoTone className="link-icon" />}
            contentTitle={"Preview"}
            content={
                <div className='content'>
                    {todo ? <><TodoIdText>Todo ID {todo.id}</TodoIdText>
                        <div>
                            <Desc>{todo.description}</Desc>
                            <StatusText isDone={todoStatus}>{todoStatus ? 'Done' : 'Not Done'}</StatusText>
                            <StyledButton type={todoStatus ? 'dashed' : 'primary'} onClick={() => handleToggleTodo(todo)}>
                                {todoStatus? 'Mark as Undone' : 'Mark as Done'}
                            </StyledButton>
                            <Button type="primary" danger onClick={
                                () => { handleDelete(todo) }}> Delete </Button>
                        </div>
                    </> : (
                        <p>Todo not found</p>
                    )}
                </div>
            }
        />

    );
};

export default PreviewToDo;

