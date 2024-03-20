"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useCartStore } from "@/utils/store";

const Carticon = () => {
  const { totalItems } = useCartStore();
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative h-8 w-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart ({totalItems})</span>
    </Link>
  );
};

export default Carticon;
