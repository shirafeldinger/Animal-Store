import React from "react";
import styled from "styled-components";

const Title = styled.h6`
  font-size: 18px;
  text-align: center;
  color: black;

  &:hover {
    color: #fc6f38;
    transition: color 0.3s ease, background-color 0.3s ease;
  }
`;

export default Title;
