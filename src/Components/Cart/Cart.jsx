import React from "react";
import Table from "./Table";
export default function Cart({ productSelected, handleRemoveProduct }) {
  const accumalteProducts = (productSelected) => {
    let objectProducts = productSelected.reduce((acc, product) => {
      acc[product.title] = acc[product.title] ? acc[product.title] : product;
      if (acc[product.title].count) {
        acc[product.title].count++;
      } else {
        acc[product.title].count = 1;
      }
      return acc;
    }, {});
    return Object.values(objectProducts);
  };

  const renderTableData = () => {
    return accumalteProducts(productSelected).map((product, index) => (
      <tr key={product.id}>
        <td>
          <button
            onClick={() => {
              handleRemoveProduct(index);
            }}
            className="btn btn-sm btn-outline-danger m-1"
          >
            X
          </button>
          {product.title}
          <img
            style={{ maxHeight: "80px", maxWidth: "80px", margin: "3px" }}
            src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
            alt="img"
          />
        </td>
        <td> {product.count}×</td>
        <td>₪{product.price}</td>
      </tr>
    ));
  };

  return (
    <Table className="table d-flex align-self-center  align-items-center justify-content-center flex-column">
      <thead>
        <tr>
          <th>מוצר</th>
          <th>כמות</th>
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
