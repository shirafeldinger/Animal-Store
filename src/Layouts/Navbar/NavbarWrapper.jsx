import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cf896d;
  flex-direction: column;
  @media (min-width: 485px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cf896d;
    flex-direction: row;
  }
`;
export default NavbarWrapper;
