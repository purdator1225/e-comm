import { useNavigate } from "react-router-dom";


import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

import React from "react";

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;

  const navigate =useNavigate();

  const onNavigateHandler = ()=> navigate(route)

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
