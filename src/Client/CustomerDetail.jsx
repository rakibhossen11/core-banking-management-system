import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Button, Card, Dropdown, Modal, Select, Table, TextInput } from "flowbite-react";
import TransactionForm from "./Transaction/TransactionForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerById, updateTransaction } from "../redux/feature/customerSlice";

const CustomerDetail = () => {
  const customers = useLoaderData();
  const dispatch = useDispatch();
  const customerId = customers.customerId;
  // const {customerId} = useParams();
  const {customer,loading} = useSelector((state) => state.customers); // Get customer data from Redux store
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  // console.log(editingTransaction);
  // console.log(customerId);
  // console.log(Date.now());
  // console.log(Math.floor(Date.now() + Math.random() * 100000));

  useEffect(() => {
      dispatch(
        fetchCustomerById(customerId)
      );
    }, [dispatch,customerId]);

    const handleUpdate = async (e) => {
      e.preventDefault();
      // console.log(customers._id, editingTransaction.txnId,editingTransaction);
      await dispatch(updateTransaction({
        _id: customers._id,
        transactionId: editingTransaction.txnId,
        transactionData: editingTransaction
      }));
      // setShowEditModal(false);
    };
  
    const handleDelete = async () => {
      await dispatch(deleteTransaction({
        customerId: customer._id,
        transactionId: transactionToDelete
      }));
      setShowDeleteModal(false);
    };
  

  return (
    <div>
      <div className="flex justify-around">
        <Card className="max-w-sm">
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Name: {customers.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Current Balance: {customers.balance ? customers.balance : 0}
            </span>
            {/* <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add friend
              </a>
              <Link to={`/transactionform/${customer._id}`}>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </Link>
            </div> */}
          </div>
        </Card>
        <TransactionForm />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            {["Date", "Sell", "Total", "Action"].map((header, index) => (
              <Table.HeadCell key={index}>{header}</Table.HeadCell>
            ))}
          </Table.Head>
          {customers ? (
            <Table.Body className="divide-y">
              {customers?.transactions?.map((tran, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {tran.date}
                  </Table.Cell>
                  {/* <Table.Cell></Table.Cell> */}
                  {/* <Table.Cell>{buyHistory ? buy.quantity : 'NO BUY'}</Table.Cell> */}
                  <Table.Cell>{tran.type}</Table.Cell>
                  <Table.Cell>{tran.amount}</Table.Cell>
                  <Table.Cell
                    className={
                      tran.currentBalance < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {tran.currentBalance}
                  </Table.Cell>
                  <Table.Cell>
                <div className="flex space-x-2">
                  <Button
                    size="xs"
                    onClick={() => {
                      setEditingTransaction(tran);
                      setShowEditModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="xs"
                    color="failure"
                    onClick={() => {
                      setTransactionToDelete(tran.trxId);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          ) : (
            <p className="text-center mt-4]">NO BUT OR SELL</p>
          )}
        </Table>
      </div>
      {/* Edit Transaction Modal */}
      <Modal show={showEditModal} onClose={() => setShowEditModal(false)}>
        <Modal.Header>Edit Transaction</Modal.Header>
        <form onSubmit={handleUpdate}>
          <Modal.Body>
            <div className="space-y-4">
              <TextInput
                label="Amount"
                type="number"
                value={editingTransaction?.amount || ''}
                onChange={(e) => setEditingTransaction({
                  ...editingTransaction,
                  amount: parseFloat(e.target.value)
                })}
                required
              />
              <Select
                label="Type"
                value={editingTransaction?.type || ''}
                onChange={(e) => setEditingTransaction({
                  ...editingTransaction,
                  type: e.target.value
                })}
                required
              >
                {/* <option value="credit">Credit</option> */}
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
              </Select>
              <TextInput
                label="Description"
                value={editingTransaction?.description || ''}
                onChange={(e) => setEditingTransaction({
                  ...editingTransaction,
                  description: e.target.value
                })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </Button>
            <Button color="gray" onClick={() => setShowEditModal(false)} disabled={loading}>
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this transaction?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={handleDelete} disabled={loading}>
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
          <Button color="gray" onClick={() => setShowDeleteModal(false)} disabled={loading}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomerDetail;
