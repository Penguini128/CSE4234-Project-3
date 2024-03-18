import React, { useState } from "react";
import Products from "./Products";
import ProductTableRow from "./ProductTableRow";

function Product() {
  const [popupVisible, setPopupVisiblity] = useState(false);

  const windowStyle = {
    display: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    background: "#a79b9b",
    width: "500px",
    height: "500px",
    marginLeft: "-250px",
    marginTop: "-250px",
    zIndex: 200,
  };

  const closePopup = () => {
    setPopupVisiblity(false);
  };

  return (
    <div style={windowStyle}>
      {popupVisible && (
        <div>
          <div>
            <span id="popupClose" onClick={closePopup}>
              X
            </span>
          </div>
          <div className="popupContent">
            <h1>Some Popup Content</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
