import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 50%;
  border: solid 1px #fc6f38;

  &&& {
    input {
      text-align: right;
    }
  }
`;
export default Form;
