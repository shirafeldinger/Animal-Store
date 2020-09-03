import styled from "styled-components";

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 250px;

  @media (min-width: 485px) {
    margin-right: 250px;
    margin-bottom: 150px;
  }

  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  &:hover {
    display: block;
  }

  & a:hover {
    background-color: #fc6f38;
    color: white;
    transition: color 0.3s ease, background-color 0.3s ease;
  }
`;
export default DropdownContent;
