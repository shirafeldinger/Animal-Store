import styled from "styled-components";

const Title = styled.p`
  font-size: 20px;
  text-align: center;
  color: #222;
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 485px) {
    top: 40%;
    transform: translateY(-40%);
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    color: #fc6f38;
    transition: color 0.3s ease, background-color 0.3s ease;
  }
`;

export default Title;
