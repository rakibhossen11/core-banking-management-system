import React from "react";
import Trasection from "../Transaction/Transection";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";

const Profile = () =>{
    const balance = useSelector((state) => state.banking.balance);
    console.log("balance from profile",balance)

    const transection = [
        {
            id : 101,
            name: "rakib",
        },
        {
            id : 101,
            name: "sakib",
        },
        {
            id : 101,
            name: "sakib",
        },
    ];
    const userData = {
        name: "John Doe",
        accountNumber: "1234567890",
        balance: `${balance}`,
        profilePicture: "https://via.placeholder.com/150",
      };

    return(
        <>
            {/* <h1>{transection.map((transec)=><h2>{transec.name}</h2>)}</h1> */}
            <ProfileCard user={userData} />
            <Trasection />
        </>
    )
}

export default Profile;