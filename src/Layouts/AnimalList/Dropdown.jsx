import styled from "styled-components";

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  color: grey;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 485px) {
    padding: 20px;
  }

  &:hover {
    color: black;
    display: block;
  }
`;
export default Dropdown;
