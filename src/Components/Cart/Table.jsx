import styled from "styled-components";

const table = styled.table`
  width: 100%;
  &&& {
    th,
    td,
    tr {
      width: 400px;
      text-align: center;
      display: table-cell;
    }
    thead {
      background-color: #fc6f38;
      color: white;
      border-radius: 5px;
      width: 400px;
    }
    td,
    tr {
      display: flex;
    }
    td {
      align-items: center;
    }
  }
`;
export default table;
