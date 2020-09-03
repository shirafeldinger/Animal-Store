import styled from "styled-components";

const AnimalWrapper = styled.div`
  positon: block;
  display: flex;
  justify-content: center;
  @media (min-width: 485px) {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
  }
`;
export default AnimalWrapper;
