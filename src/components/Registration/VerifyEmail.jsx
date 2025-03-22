import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/auth/verify-email?token=${token}`
        );
        setMessage(response.data.message);
      } catch (error) {
        setMessage(
          error.response?.data?.message || "Email verification failed"
        );
      }
    };

    verifyEmail();
  }, [token]);
  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
