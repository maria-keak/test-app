import React, { useCallback, useEffect, useState } from 'react';
import { Checkbox, Button, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItemThunk } from '../../redux-store/thunks/deleteItem.js';
import { toggleTodoThunk } from '../../redux-store/thunks/mark.js';
import * as Styled from './styled/index.js'
import { getTodos } from '../../redux-store/selectors/index.js';

const ListsComponent = () => {

    const dispatch = useDispatch();
    const todos = useSelector(getTodos);

    const handleCheckboxChange = useCallback((todo) => {
        dispatch(toggleTodoThunk({ ...todo, done: !todo.done }));
    }, [dispatch]);

    const handleDelete = useCallback((todo) => {
        dispatch(deleteItemThunk({ id: todo.id}))
    }, [dispatch]);

    return <Styled.Content style={{ width: '100%' }}>
        {

            (todos.length ? todos.map(todo => {
                return ( <Styled.Item key={todo.id + '_i'}>

                    <Checkbox checked={todo.done} onChange={() => handleCheckboxChange(todo)}>
                        <Styled.MarkedSpan marked={todo.done}>
                            {todo.description}
                        </Styled.MarkedSpan>
                    </Checkbox>
                    <Styled.Actions>
                        <Link to={"/todo/" + todo.id}>
                            See more
                        </Link>

                        <Button type="primary" danger onClick={() => handleDelete(todo)}>Delete</Button>
                    </Styled.Actions>

                </Styled.Item>)

            })
                : <p>The To-Do List is currently empty. Please tap 'Create New Todo' to get started.</p>
            )
        }
    </Styled.Content>


}
export default ListsComponent;

