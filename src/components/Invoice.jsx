import React from "react";
// import generateInvoicePDF from "./generateInvoicePDF"; // Import the function
import jsPDF from "jspdf";
import "jspdf-autotable";

const Invoice = () => {
  const orderData = {
    totalAmount: 4000,
    products: [
      {
        name: "GP 20 Minute",
        quantity: 10,
        sellprice: 20,
      },
      {
        name: "Robi",
        quantity: 5,
        sellprice: 20,
      },
    ],
  };
  return (
    <div>
      {/* <h2>Invoice Page</h2>
      <button onClick={() => generateInvoicePDF(orderData)}>Download Invoice</button>
      <div>
      <h2>POS Invoice</h2>
      <button onClick={() => printPOSInvoice(orderData)}>Print Invoice</button>
    </div> */}
    </div>
  );
};

export default Invoice;

const generateInvoicePDF = (orderData) => {
  const doc = new jsPDF();

  // Invoice Title
  doc.setFontSize(16);
  doc.text("Invoice", 14, 20);

  // Order Details
  doc.setFontSize(12);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 30);
  doc.text(`Total Amount: $${orderData.totalAmount}`, 14, 40);

  // Table Headers and Data
  const tableColumn = ["Product Name", "Quantity", "Unit Price", "Total"];
  const tableRows = [];

  orderData.products.forEach((product) => {
    const productData = [
      product.name,
      product.quantity,
      `$${product.sellprice}`,
      `$${product.quantity * product.sellprice}`,
    ];
    tableRows.push(productData);
  });

  // doc.autoTable({
  //   head: [tableColumn],
  //   body: tableRows,
  //   startY: 50,
  // });
  // doc.autoTable({
  //   head: [tableColumn],
  //   body: tableRows,
  //   startY: 50,
  //   styles: { fontSize: 10, cellPadding: 5 },
  // });

  // Save the PDF
  doc.save("invoice.pdf");
};

const printPOSInvoice = (orderData) => {
  const printWindow = window.open("", "_blank");
  printWindow.document.write("<pre>"); // Ensures monospaced font

  printWindow.document.write("================================\n");
  printWindow.document.write("        My Shop Invoice        \n");
  printWindow.document.write("================================\n");
  printWindow.document.write(`Date: ${new Date().toLocaleDateString()} \n`);
  printWindow.document.write("================================\n");
  printWindow.document.write("Item           Qty    Price   Total\n");
  printWindow.document.write("--------------------------------\n");

  orderData.products.forEach((product) => {
    printWindow.document.write(
      `${product.name.padEnd(12)} ${product.quantity.toString().padEnd(6)} $${product.sellprice
        .toString()
        .padEnd(7)} $${(product.quantity * product.sellprice).toFixed(2)}\n`
    );
  });

  printWindow.document.write("--------------------------------\n");
  printWindow.document.write(`Total Amount: $${orderData.totalAmount}\n`);
  printWindow.document.write("================================\n");
  printWindow.document.write("      THANK YOU, COME AGAIN!    \n");
  printWindow.document.write("================================\n");

  printWindow.document.write("</pre>");
  printWindow.document.close();
  printWindow.print();
};
