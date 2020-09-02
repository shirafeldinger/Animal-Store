import React from "react";

export default function Cart({ productSelected }) {
  const renderTableData = () => {
    return productSelected.map((product) => (
      <tr key={product.id}>
        <td>₪{product.price}</td>
        <td>
          <img
            style={{ maxHeight: "100px", maxWidth: "100px" }}
            src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
            alt="img"
          />
        </td>
        <td style={{ direction: "rtl" }}>{product.title}</td>
      </tr>
    ));
  };

  return (
    <table
      className="table d-flex flex-column
    justify-content-center
    align-items-center "
    >
      {" "}
      <thead>
        <tr>
          <th>מחיר</th>
          <th></th>
          <th>מוצר</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
      <tfoot>
        <tr>
          {" "}
          <td>
            ₪
            {productSelected.reduce((total, item) => {
              return Number(total) + Number(item.price);
            }, 0)}
          </td>
          <td></td>
          <th>סה"כ</th>
        </tr>
      </tfoot>
    </table>
  );
}
