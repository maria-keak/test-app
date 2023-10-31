import React, { useState } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../features/todos/todoSlice';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {  ReconciliationTwoTone } from '@ant-design/icons';


function MyForm() {
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (values) => {
        dispatch(addTodo({ ...values, done: false }))
        navigate('/todos');
    };



    const handleFormChange = (_, allFields) => {
        const formIsValid = allFields.every((field) => field.name[0] !== 'description' || (field.value && field.value.trim()));
        setIsFormValid(formIsValid);
    };


    return (
        <div className='main-container'>
            <Card title="Create New To-do Item"
                className='card'
                extra={
                    <Link to="/todos">
                    <span className="link-text">Go back to entire list</span>
                    <ReconciliationTwoTone  className="link-icon" />
                </Link>}>
                <Form
                    name="createTodoForm"
                    onFieldsChange={handleFormChange}
                    onFinish={onFinish}>

                    <Form.Item
                        label="Id"
                        name="id"
                        initialValue={uuidv4()}
                        rules={[{
                            validator: (_, value) => value && value.trim() ? Promise.resolve() :
                                Promise.reject("This field can't be empty")
                        }]}>

                        <Input placeholder="Enter the Id" />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{
                            validator: (_, value) => value && value.trim() ? Promise.resolve() :
                                Promise.reject("This field can't be empty")
                        }]}>
                        <Input placeholder="Enter the description" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={!isFormValid}>
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default MyForm;
