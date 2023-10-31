import React from 'react';
import { Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteTodo, toggleTodo } from '../../features/todos/todoSlice';
import './style.css'
import {   ReconciliationTwoTone } from '@ant-design/icons';


const TodoDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { id } = useParams();
    const todo = useSelector((state) => state.todo.find((t) => t.id == id));

    return (
        <div className='main-container'>
            <Card
                className='card'
                title="Preview"
                extra={
                    <Link to="/todos">
                        <span className="link-text">Go back to entire list</span>
                        <ReconciliationTwoTone  className="link-icon" />
                    </Link>}>

                <p className='todo-id'>Todo ID {todo.id}</p>
                {todo ? (
                    <div>
                        <p className='desc'>{todo.description}</p>
                        <p className={todo.done ? 'Done' : "Notdone"}>{todo.done ? 'Done' : 'Not Done'}</p>
                        <Button type={todo.done ? "dashed" : "primary"}
                            onClick={() => { dispatch(toggleTodo(todo.id)) }}>
                            {todo.done ? "Mark as Undone" : "Mark as Done"}
                        </Button>
                        <Button type="primary" danger onClick={() => { dispatch(deleteTodo(todo.id));  navigate('/todos');}}> Delete </Button>
                    </div>
                ) : (
                    <p>Todo not found</p>
                )}
            </Card>
        </div>
    );
};

export default TodoDetail;
