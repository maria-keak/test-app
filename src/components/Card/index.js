import React from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "./styled/index.js";
import { Card } from "antd";
import { getundoneToDosCount } from "../../redux-store/selectors/index.js";
import { useSelector } from "react-redux";

const CardComponent = ({
  content,
  contentTitle,
  linkTo,
  linkText,
  linkIcon,
  loading = false,
  showFooter = false,
}) => {
  const undoneTodosCount = useSelector(getundoneToDosCount);
  return (
    <StyledCard
      style={{ width: 700, marginTop: 16 }}
      className="card"
      title={contentTitle}
      loading={loading}
      extra={
        <Link to={linkTo}>
          <span className="link-text"> {linkText} </span>
          {linkIcon}
        </Link>
      }
    >
      {content}

      {showFooter ? (
        <Card.Grid hoverable={false} style={{ width: "100%" }}>
          {undoneTodosCount} todos left
        </Card.Grid>
      ) : null}
    </StyledCard>
  );
};

export default CardComponent;
