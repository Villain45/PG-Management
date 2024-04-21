"use client";

import Nav from "@/components/Nav";
import RentTable from "@/components/RentTable";
import { useState } from "react";

const rentStatus = () => {
  const [tenants, setTenants] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const callTenants = async (e) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/rent_status");
      const allTenants = await response.json();
      await setTenants(allTenants);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="max-w-full">
      <Nav />
      <div className="w-5/6 ml-auto mr-auto">
        <button
          className="w-1/6 rounded-lg p-2 mt-4 bg-white text-black font-bold text-center"
          onClick={callTenants}
        >
          {submitting ? "Loading..." : "Get Pending Payers"}
        </button>
      </div>
      <RentTable
        tenants={tenants}
        setTenants={setTenants}
        submitting={submitting}
        setSubmitting={setSubmitting}
      />
    </section>
  );
};

export default rentStatus;
