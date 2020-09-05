import styled from "styled-components";

const ProductTitle = styled.h1`
  color: #000;
  font-size: 18px;
  margin: 5px;
  position: absolute;
  top: 0;
  text-align: center;
  @media (min-width: 485px) {
    font-size: 30px;
    font-weight: 400;
  }
`;

export default ProductTitle;
