import React, { useState, useEffect } from 'react';
import { Card, Checkbox, Button } from 'antd';
import { toggleTodo, deleteTodo } from '../../features/todos/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'
import { PlusSquareOutlined } from '@ant-design/icons';

const ToDos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo);

    const [undoneCount, setUndoneCount] = useState(1);

    useEffect(() => {
        const undone = todos.filter((todo) => !todo.done);
        setUndoneCount(undone.length);
    }, [todos]);


    const handleCheckboxChange = (todo) => {
        dispatch(toggleTodo(todo.id));
    };

    const handleDelete = (todo) => {
        dispatch(deleteTodo(todo.id));
    };

    return <div className='main-container'>
        <Card
            className='card'
            title="Entire list of To-Dos"
            extra={
                <Link to="/todo/create">
                    <span className="link-text">Create New Todo</span>
                    <PlusSquareOutlined className="link-icon" />
                </Link>}>
            <div className='content'>
                {todos.length ? todos.map(todo => {
                    return <div className="item" key={todo.id + '_i'}>
                        <Checkbox checked={todo.done} onChange={() => handleCheckboxChange(todo)}>
                            <span className={todo.done ? "marked" : ""}>
                                {todo.description}
                            </span>
                        </Checkbox>
                        <div className="actions">
                            <Link to={"/todo/" + todo.id}>
                                See more
                            </Link>

                            <Button type="primary" danger onClick={() => handleDelete(todo)}>Delete</Button>
                        </div>
                    </div>

                })
                    : <p>The To-Do List is currently empty. Please tap 'Create New Todo' to get started.</p>}


            </div>
            <Card.Grid hoverable={false} style={{ width: '100%' }}>
                {undoneCount} todos left
            </Card.Grid>
        </Card>
    </div>
}
export default ToDos;