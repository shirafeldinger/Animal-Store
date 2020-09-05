import styled from "styled-components";

const ProductDescriotion = styled.div`
  color: #838383;
  font-size: 15px;
  text-align: right !important;
  margin: 20px;
  position: absolute;
  top: 25%;
  transform: translateY(-25%);

  @media (min-width: 485px) {
    top: 20%;
    transform: translateY(-20%);
    font-size: 20px;
  }
`;

export default ProductDescriotion;
