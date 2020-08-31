import React from "react";

export default function Deals({ deals }) {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      {deals.map((deal) => (
        <div
          style={{ height: "250px" }}
          className="col-3 card m-1 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="">{deal.title}</div>
          <div className="">{deal.normalPrice}</div>
          <div className="">{deal.salePrice}</div>
          <div className="">{deal.storeId}</div>
          <img src={deal.thumb} alt="img" />
        </div>
      ))}
    </div>
  );
}
