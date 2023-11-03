import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledCard } from './style.js';
import { Card } from 'antd';


const CardComponent = ({ content, contentTitle, linkTo, linkText, linkIcon, footerContent}) => {
 
    return (
        <StyledCard style={{ width: 700, marginTop: 16 }}
            className='card'
            title={contentTitle}
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
