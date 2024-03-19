"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { OrderType } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const OrderPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  // load data using loading.. to avoid fetching problems
  if (isLoading || status === "loading") return "Loading...";
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => (
            <tr className="text-sm md:text-base odd:bg-red-50" key={item.id}>
              <td className="hidden md:block py-6 px-1">123456789423</td>
              <td className="py-6 px-1">18.03.2023</td>
              <td className="py-6 px-1">89.90</td>
              <td className="hidden md:block">
                Big Burger Menu (2), Veggie Pizza (2), Cola Cola 1L (2)
              </td>
              <td className="py-6 px-1">On the way (approx. 10min)...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
