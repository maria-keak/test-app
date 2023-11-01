import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ReconciliationTwoTone } from '@ant-design/icons';
import { deleteTodo, toggleTodo } from '../../redux-store/todoSlice';
import './style.css'
import CardComponent from '../../components/Card/Card';


const PreviewToDo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { id } = useParams();
    const todo = useSelector((state) => state.todo.find((t) => t.id == id));

    return (

        <CardComponent
            linkTo="/todos"
            linkText="Go back to the entire list"
            linkIcon={<ReconciliationTwoTone className="link-icon" />}
            contentTitle={"Preview"}
            content={
                <div className='content'>
                    <p className='todo-id'>Todo ID {todo.id}</p>
                    {todo ? (
                        <div>
                            <p className='desc'>{todo.description}</p>
                            <p className={todo.done ? 'Done' : "Notdone"}>{todo.done ? 'Done' : 'Not Done'}</p>
                            <Button type={todo.done ? "dashed" : "primary"}
                                onClick={() => { dispatch(toggleTodo(todo.id)) }}>
                                {todo.done ? "Mark as Undone" : "Mark as Done"}
                            </Button>
                            <Button type="primary" danger onClick={() => { dispatch(deleteTodo(todo.id)); navigate('/todos'); }}> Delete </Button>
                        </div>
                    ) : (
                        <p>Todo not found</p>
                    )}
                </div>
            }
        />

    );
};

export default PreviewToDo;

