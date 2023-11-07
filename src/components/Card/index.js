import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './styled/index.js';
import { Card } from 'antd';


const CardComponent = ({ content, contentTitle, linkTo, linkText, linkIcon, footerContent, loading=false}) => {
 
    return (
        <StyledCard style={{ width: 700, marginTop: 16 }}
            className='card'
            title={contentTitle}
            loading={loading}
            extra={
                <Link to={linkTo}>
                    <span className="link-text"> {linkText} </span>
                    {linkIcon}
                </Link>}>
                    
           {content}

            {footerContent != null ?
                <Card.Grid hoverable={false} style={{ width: '100%' }}>
                    {footerContent} todos left
                </Card.Grid> : null}
        </StyledCard>

    );
};

export default CardComponent;
