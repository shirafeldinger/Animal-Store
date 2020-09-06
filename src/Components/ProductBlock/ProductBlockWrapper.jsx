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
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (min-width: 485px) {
    height: 440px;
  }
`;
export default ProductBlockWrapper;
