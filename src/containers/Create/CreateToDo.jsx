import { ReconciliationTwoTone } from '@ant-design/icons';
import FormComponent from '../../components/Form/Form';
import CardComponent from '../../components/Card/Card';


function CreateToDo() {


    return (

        <CardComponent
            linkTo="/todos"
            linkText="Go back to the entire list"
            linkIcon={<ReconciliationTwoTone className="link-icon" />}
            contentTitle={"Create New To-do Item"}
            content={<FormComponent/>}
        />
    );
}

export default CreateToDo;
