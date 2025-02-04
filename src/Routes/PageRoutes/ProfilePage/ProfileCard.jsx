import React from "react";

const ProfileCard = ({user}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-5 border border-gray-200">
      <div className="flex flex-col items-center">
        {/* <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
        /> */}
        <h2 className="mt-3 text-xl font-semibold text-gray-800">
          {user.name}
        </h2>
        <p className="text-gray-500 text-sm">
          Account No: {user.accountNumber}
        </p>
        <div className="mt-4 w-full">
          <p className="text-gray-700 text-sm">Balance</p>
          <p className="text-xl font-semibold text-green-600">
            ${user.balance}
          </p>
        </div>
        {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          View Transactions
        </button> */}
      </div>
    </div>
  );
};

export default ProfileCard;
