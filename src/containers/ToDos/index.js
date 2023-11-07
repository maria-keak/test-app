import React, { useEffect } from 'react';
import CardComponent from '../../components/Card/index.js';
import ListsComponent from '../../components/Lists/index.js';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEntireListThunk } from '../../redux-store/thunks/lists.js';
import { isLoading } from '../../redux-store/selectors/index.js';

const ToDos = () => {
    const dispatch = useDispatch();

    const isloading = useSelector(isLoading);
    
    useEffect(() => {
        dispatch(getEntireListThunk())
    }, []);

    const [undoneCount, setUndoneCount] = useState(1);

   return <CardComponent
    content={<ListsComponent 
        setUndoneCount={setUndoneCount}
        />}
    linkTo="/todo/create"
    linkText="Create New Todo"
    linkIcon={ <PlusSquareOutlined className="link-icon" />}
    contentTitle={"Entire List"}
    footerContent={undoneCount}
    loading={isloading}
/>

}
export default ToDos;
