import React from "react";

export default function Cart({ productSelected }) {
  const renderTableData = () => {
    return productSelected.map((product) => (
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>
          <img
            style={{ maxHeight: "100px", maxWidth: "100px" }}
            src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
            alt="img"
          />
        </td>
        <td>₪{product.price}</td>
      </tr>
    ));
  };

  return (
    <table
      className="table d-flex flex-column
    justify-content-center
    align-items-center table-bordered  "
    >
      <thead>
        <tr>
          <th>מוצר</th>
          <th></th>
          <th>מחיר</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
      <tfoot>
        <tr>
          {" "}
          <th>סה"כ</th> <td></td>
          <td>
            ₪
            {productSelected.reduce((total, item) => {
              return Number(total) + Number(item.price);
            }, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
