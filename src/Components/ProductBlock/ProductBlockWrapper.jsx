import styled from "styled-components";

const ProductBlockWrapper = styled.div`
  height: 350px;
  color: #000;
  text-align: center;

  padding: 0.75rem;
  margin: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 485px) {
    height: 440px;
  }
`;
export default ProductBlockWrapper;
