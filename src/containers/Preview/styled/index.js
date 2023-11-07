import { Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin-right: 5px;
`;

const StatusText = styled.p`
  font-size: 20px;
  color: ${props => (props.isDone ? 'green' : 'red')};

  &::after {
    content: ${props => (props.isDone ? '"✌"' : '"☹"')};
    font-size: ${props => (props.isDone ? '20px' : '25px')};
    margin: 0 ${props => (props.isDone ? '0' : '5px')};
    display: inline-block;
  }
`;

const Desc = styled.p`
  color: gray;
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const TodoIdText = styled.div`
  font-weight: 700;
`;

export { StyledButton, StatusText, Desc, TodoIdText };
