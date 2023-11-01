"use client";
import { useRouter } from "next/navigation";

import React from "react";
import axios from "axios";
import Button from "../../shared/components/Button";

const Customer = () => {
  const router = useRouter();
  const classBtn = "py-3 px-20";

  const handleOrder = () => {
    router.push("customer/order");
  };

  const handleDiposit = () => {
    router.push("customer/wallet");
  };

  const post = async () => {
    const a = await axios.post("http://localhost:3000/api/alert", {
      title: "title day",
      message: "message ne",
      url: "https://order-food-six.vercel.app",
    });
    console.log(a);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <button onClick={post}>abac</button>

      <div className="grid grid-cols-2 gap-5">
        <Button text="Đặt món" cls={classBtn} onClick={handleOrder} />
        <Button text="Ví" cls={classBtn} onClick={handleDiposit} />
      </div>
    </div>
  );
};

export default Customer;
