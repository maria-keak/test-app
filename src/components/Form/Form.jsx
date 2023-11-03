import { Form, Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { createThunk } from '../../redux-store/thunks/create';
import { validator } from '../../helpers/formHelper';

const FormComponent = () => {

    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = useCallback((values) => {
        dispatch(createThunk({ ...values, done: false }))
        .then(() => navigate('/todos'));
    }, [dispatch, navigate]);



    const handleFormChange = useCallback((_, allFields) => {
        const formIsValid = allFields.every((field) => field.name[0] !== 'description' || (field.value && field.value.trim()));
        setIsFormValid(formIsValid);
    }, [setIsFormValid]);

    return (
        <Form
            name="createTodoForm"
            onFieldsChange={handleFormChange}
            onFinish={onFinish}>

            <Form.Item
                label="Id"
                name="id"
                initialValue={uuidv4()}
                rules={[validator()]}>

                <Input placeholder="Enter the Id" />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[validator()]}>
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
