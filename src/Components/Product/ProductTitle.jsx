import styled from "styled-components";

const ProductTitle = styled.h1`
  color: #000;
  font-size: 23px;

  letter-spacing: -0.75px;
  padding: 0;
  line-height: 1.1;
  position: absolute;
  top: 10px;
  text-align: center;
  @media (min-width: 485px) {
    font-size: 30px;
    font-weight: 400;
  }
`;

export default ProductTitle;
