import React from "react";
import Trasection from "../Transaction/Transection";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import TransectionForm from "../Transaction/TransectionForm";

const Profile = () => {
  const balance = useSelector((state) => state.banking.balance);
  console.log("balance from profile", balance);
  const userData = {
    name: "John Doe",
    accountNumber: "1234567890",
    balance: `${balance}`,
    profilePicture: "https://via.placeholder.com/150",
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <ProfileCard user={userData} />
        <TransectionForm />
      </div>
      <Trasection />
    </>
  );
};

export default Profile;
