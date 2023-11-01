import React, {  useEffect } from 'react';
import {  Checkbox, Button } from 'antd';
import { toggleTodo, deleteTodo } from '../../redux-store/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'

const ListsComponent = ({setState}) => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo);

    useEffect(() => {
        const undone = todos.filter((todo) => !todo.done);
        setState(undone.length);
    }, [todos]);

    const handleCheckboxChange = (todo) => {
        dispatch(toggleTodo(todo.id));
    };

    const handleDelete = (todo) => {
        dispatch(deleteTodo(todo.id));
    };

    return <div className='content' style={{ width: '100%' }}>
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
    

}
export default ListsComponent;

