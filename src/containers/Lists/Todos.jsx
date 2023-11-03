import React from 'react';
import CardComponent from '../../components/Card/Card';
import ListsComponent from '../../components/Lists/ListsComponent';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';

const ToDos = () => {

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
/>

}
export default ToDos;
