"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import PageLayout from "../pageComponents/PageLayout";

const PrescribingPage: React.FC = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("medicine");

  return (
    <PageLayout>
      <h1>Prescribing Information</h1>
      <p>Selected Medicine: {search}</p>
      <h2>Duration(Days)</h2>
      <h2>Quantity</h2>
    </PageLayout>
  );
};

export default PrescribingPage;
