import React, { useCallback, useEffect, useState } from 'react';
import { Checkbox, Button, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItemThunk } from '../../redux-store/thunks/deleteItem';
import { toggleTodoThunk } from '../../redux-store/thunks/mark';
import {
    Content,
    Item,
    Actions,
    MarkedSpan
} from './style.js'
import { getTodos } from '../../redux-store/selectors';

const ListsComponent = ({ setUndoneCount }) => {

    const dispatch = useDispatch();
    const todos = useSelector(getTodos);

    const [loadingItem, setLoadingItem] = useState(false);


    useEffect(() => {
        const undone = todos.filter((todo) => !todo.done);
        setUndoneCount(undone.length);
    }, [todos]);

    const handleCheckboxChange = useCallback((todo) => {
        dispatch(toggleTodoThunk({ ...todo, done: !todo.done }));
    }, [dispatch]);

    const handleDelete = useCallback((todo) => {
        setLoadingItem(true);
        dispatch(deleteItemThunk({ id: todo.id, callback: () => setLoadingItem(false) }))
    }, [dispatch]);

    return <Content style={{ width: '100%' }}>
        {

            (todos.length ? todos.map(todo => {
                return loadingItem ? <Skeleton.Input active size={'large'} block />  :( <Item key={todo.id + '_i'}>

                    <Checkbox checked={todo.done} onChange={() => handleCheckboxChange(todo)}>
                        <MarkedSpan marked={todo.done}>
                            {todo.description}
                        </MarkedSpan>
                    </Checkbox>
                    <Actions>
                        <Link to={"/todo/" + todo.id}>
                            See more
                        </Link>

                        <Button type="primary" danger onClick={() => handleDelete(todo)}>Delete</Button>
                    </Actions>

                </Item>)

            })
                : <p>The To-Do List is currently empty. Please tap 'Create New Todo' to get started.</p>
            )
        }
    </Content>


}
export default ListsComponent;

