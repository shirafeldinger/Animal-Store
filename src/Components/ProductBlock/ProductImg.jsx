import styled from "styled-components";

const ProductImg = styled.img`
  max-width: 200px;
  max-height: 200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
  @media (min-width: 485px) {
    max-width: 250px;
    max-height: 250px;
  }
`;
export default ProductImg;
