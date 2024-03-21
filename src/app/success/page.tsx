"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
          method: "PUT",
        });
        router.push("/orders");
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [payment_intent, router]);

  return <div>Redirection is performed, do not close the page.</div>;
};

export default SuccessPage;
