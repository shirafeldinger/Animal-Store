import styled from "styled-components";

const ProductImg = styled.img`
  max-height: 180px;
  max-width: 180px;
  position: absolute;
  bottom: 30px;
  right: 0;
  margin: 10px;
  @media (min-width: 485px) {
    max-height: 300px;
    max-width: 300px;
  }
`;

export default ProductImg;
