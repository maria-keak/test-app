import React, { useCallback } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ReconciliationTwoTone } from '@ant-design/icons';
import CardComponent from '../../components/Card/Card';
import { toggleTodoThunk } from '../../redux-store/thunks/mark';
import { deleteItemThunk } from '../../redux-store/thunks/deleteItem';
import { fetchListsData } from '../../redux-store/thunks/lists';
import { Desc, StatusText, StyledButton, TodoIdText } from './style';
// import './style.css'


const PreviewToDo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // dispatch(fetchListsData()) ///???
    const { id } = useParams();
    const todo = useSelector((state) => state.todo.todos.find((t) => t.id == id));

    const handleToggleTodo = useCallback(() => {
        dispatch(toggleTodoThunk({ ...todo, done: !todo.done }));
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
                            <StatusText isDone={todo.done}>{todo.done ? 'Done' : 'Not Done'}</StatusText>
                            <StyledButton type={todo.done ? 'dashed' : 'primary'} onClick={handleToggleTodo}>
                                {todo.done ? 'Mark as Undone' : 'Mark as Done'}
                            </StyledButton>
                            <Button type="primary" danger onClick={() => { dispatch(deleteItemThunk(todo.id)).then(() => navigate('/todos')) }}> Delete </Button>
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

