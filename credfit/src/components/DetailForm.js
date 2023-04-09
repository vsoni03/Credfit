import React from "react";
import "./DetailForm.css";

const DetailForm = () => {
  return (
    <div class="detail-form">
      <h1 class="detail-form-h1">
        Discover the potential savings you can achieve today by switching to a{" "}
        <span>Capital One</span> credit card.
      </h1>

      <div class="inputs">
        <div class="input-grp">
          <p class="input-label">
            Credit Card Number{" "}
            <input
              placeholder="XXXXXXXXXXX1550"
              style={{ width: "300px" }}
            ></input>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailForm;
