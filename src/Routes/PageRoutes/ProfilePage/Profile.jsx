import React from "react";
import Trasection from "../Transaction/Transection";
import ProfileCard from "./ProfileCard";

const Profile = () =>{

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
        balance: "5,240.75",
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