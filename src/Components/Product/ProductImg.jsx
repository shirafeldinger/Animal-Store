import styled from "styled-components";

const ProductImg = styled.img`
  max-height: 180px;
  max-width: 180px;
  position: absolute;
  bottom: 15%;
  right: 0;
  margin: 10px;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.3);
  }
  @media (min-width: 485px) {
    max-height: 300px;
    max-width: 300px;
    bottom: 0;
  }
`;

export default ProductImg;
