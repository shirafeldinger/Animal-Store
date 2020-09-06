import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  &&& {
    img {
      width: 100px;
      margin-left: 30px;
      margin: 10px;
    }
  }
`;
export default NavbarWrapper;
