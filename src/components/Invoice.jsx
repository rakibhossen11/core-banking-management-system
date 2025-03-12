import React, { useRef } from "react";

const Invoice = ({ selectedProducts, totalPrice }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div>
        <div
          ref={componentRef}
          style={{ padding: "20px", border: "1px solid #ccc" }}
        >
          <h2 style={{ textAlign: "center" }}>My POS System</h2>
          <h3 style={{ textAlign: "center" }}>Invoice</h3>
          <p style={{ textAlign: "right" }}>
            Date: {new Date().toLocaleDateString()}
          </p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Product
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((product, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {product.name}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    ${product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ marginTop: "20px", textAlign: "right" }}>
            Total: ${totalPrice}
          </h3>
        </div>

        <button
          onClick={handlePrint}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;
