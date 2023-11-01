import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './style.css'

const CardComponent = ({ content, contentTitle, linkTo, linkText, linkIcon, footerContent }) => {


    return (
        <Card 
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
        </Card>

    );
};

export default CardComponent;
