import React, { useState } from "react";
import Table from "./Table";
import CartBtn from "./CartBtn";
import CartWrapper from "./CartWrapper";
export default function Cart({ productSelected, handleRemoveProduct }) {
  const [message, setMessage] = useState("");
  const [classMsg, setClassMsg] = useState("");

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

  const totalCount = productSelected.reduce((total, item) => {
    return Number(total) + Number(item.price);
  }, 0);

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
          {product.title.replace("[MIN_PRICE]", product.price)}
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
    <CartWrapper>
      <Table>
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
            <td>₪{totalCount}</td>
          </tr>
        </tfoot>
      </Table>
      <CartBtn
        onClick={() => {
          if (totalCount) {
            setMessage("רכשת את הפרטים!");
            setClassMsg("alert alert-success");
          } else {
            setMessage("העגלה ריקה");
            setClassMsg("alert alert-danger");
          }
        }}
      >
        לרכישה
      </CartBtn>
      <p className={classMsg}>{message}</p>
    </CartWrapper>
  );
}
