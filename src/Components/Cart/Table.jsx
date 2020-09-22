import styled from "styled-components";

const table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &&& {
    th,
    td,
    tr {
      width: 500px;
      text-align: center;
      display: table-cell;
    }
    thead {
      background-color: #fc6f38;
      color: white;
      border-radius: 5px;
      width: 500px;
    }
    td,
    tr {
      display: flex;
    }
    td {
      align-items: center;
      justify-content: center;
    }
  }
`;
export default table;
