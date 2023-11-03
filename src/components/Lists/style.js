import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 40px;
  align-items: stretch;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.502);
  border-top: 1px solid rgba(128, 128, 128, 0.502);

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const MarkedSpan = styled.span`
  text-decoration: ${props => (props.marked ? 'line-through 1px solid' : 'none')};
  font-style: ${props => (props.marked ? 'italic' : 'normal')};
  color: ${props => (props.marked ? 'grey' : 'initial')};

  &::after {
    content: "(marked as done)";
    color: rgba(0, 128, 0, 0.461);
    font-size: 13px;
    margin: 0 5px;
    display: ${props => (props.marked ? 'inline-block' : 'none')};
  }
`;

