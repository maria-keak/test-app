import { Form, Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux-store/todoSlice';
import { useState } from 'react';

const FormComponent = () => {

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

    );
};

export default FormComponent;
