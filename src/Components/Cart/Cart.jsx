import React from "react";
import Table from "./Table";
export default function Cart({ productSelected, handleRemoveProduct }) {
  const renderTableData = () => {
    return productSelected.map((product, index) => (
      <tr key={product.id}>
        <td>
          <button
            onClick={() => {
              handleRemoveProduct(index);
            }}
            className="btn btn-danger m-3"
          >
            X
          </button>
          {product.title}
          <img
            style={{ maxHeight: "100px", maxWidth: "100px", margin: "5px" }}
            src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
            alt="img"
          />
        </td>

        <td>₪{product.price}</td>
      </tr>
    ));
  };

  return (
    <Table className="table d-flex align-self-center  align-items-center justify-content-center flex-column">
      <thead>
        <tr>
          <th>מוצר</th>

          <th>מחיר</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
      <tfoot>
        <tr>
          <th>סה"כ</th>
          <td>
            ₪
            {productSelected.reduce((total, item) => {
              return Number(total) + Number(item.price);
            }, 0)}
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}
