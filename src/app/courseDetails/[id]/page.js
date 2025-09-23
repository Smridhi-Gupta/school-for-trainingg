"use client";

import Details from "@/components/sections/courses/Details";
import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <Details id={params.id} />
    </div>
  );
};

export default Page;
