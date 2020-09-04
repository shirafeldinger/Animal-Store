import styled from "styled-components";

const ProductBtn = styled.button`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  background-color: #fc6f38;
  margin: 10px;
  width: 25wh;
  height: 10vh;
  border: none;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background-color: #c96c48;
    border: 2px solid #c96c48;
  }

  &&& {
    svg {
      fill: white;
      height: 2em;
      width: 2em;
    }
  }
`;

export default ProductBtn;
