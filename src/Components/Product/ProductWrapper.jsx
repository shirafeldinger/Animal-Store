import styled from "styled-components";

const ProductWrapper = styled.div`
  position: relative;
  height: 80vh;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  @media (min-width: 485px) {
    height: 70vh;
  }
`;
export default ProductWrapper;
