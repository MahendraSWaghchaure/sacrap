import React from "react";
import Sidebar from "../Common/CompanySidebar";
import PaymentsTableRow from "./PaymentsReceivedTableRow";

const PaymentsMadeTable = () => {
  const currentDateTime = new Date().toLocaleString(); // Get current date and time

  const transactions = [
    {
      srNo: 1,
      receivedFrom: "Customer A",
      paymentMode: "Credit Card",
      status: "Paid",
      paidOn: currentDateTime,
      invoice: "INV-001",
    },
    {
      srNo: 2,
      receivedFrom: "Customer B",
      paymentMode: "Debit Card",
      status: "Pending",
      paidOn: currentDateTime,
      invoice: "INV-002",
    },
  ].map((transaction, index) => ({
    ...transaction,
    transactionId: `TXN${String(index + 1).padStart(5, "0")}`, // Auto-increment transaction id
  }));

  return (
    <div>
      <div className="dashboard-title">
        <h2>Your transactions</h2>
        <p>Current Date and Time: {currentDateTime}</p>
      </div>
      <div className="table-responsive mt-5">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Received From</th>
              <th scope="col">Payment Mode</th>
              <th scope="col">Status</th>
              <th scope="col">Paid On</th>
              <th scope="col">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((record) => {
              return <PaymentsTableRow key={record.srNo} record={record} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsMadeTable;