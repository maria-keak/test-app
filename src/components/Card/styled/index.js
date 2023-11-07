import styled from 'styled-components';
import { Card } from 'antd';
const StyledCard = styled(Card)`
  width: 700px;
  margin-top: 16px;

  .link-text {
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
`;

export {StyledCard}