import styled from "styled-components";

const table = styled.table`
  &&& {
    th,
    td,
    tr {
      padding: 15px;
      width: 400px;
      text-align: center;
      box-sizing: border-box;
    }
    thead {
      background-color: #fc6f38;
      color: white;
      border-radius: 5px;
    }
    td,
    tr {
      display: flex;
      justify-content: center;
    }
    td {
      align-items: center;
    }
  }
`;
export default table;
