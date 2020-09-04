import styled from "styled-components";

const ProductBtn = styled.button`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  margin: 10px;
  background-color: #fc6f38;
  background-img: "https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png";
  border: 2px solid #fc6f38;
  color: white;

  &:hover {
    background-color: #c96c48;
    border: 2px solid #c96c48;
  }
`;

export default ProductBtn;
