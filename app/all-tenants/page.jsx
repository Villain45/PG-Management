"use client";

import Nav from "@/components/Nav";
import { useState } from "react";
import toast from "react-hot-toast";

const all_tenants = () => {
  const [allTenants, setAllTenants] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const callAllTenants = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/all_tenants", {
        method: "GET",
      });
      const fetchedTenants = await response.json();
      await setAllTenants(fetchedTenants);
      if(response.ok) toast.success("Fetched All Tenants")
      else toast.error(response.statusText)
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
          className="w-1/6 flex items-center justify-center rounded-lg p-2 mt-6 bg-white text-black font-bold text-center"
          onClick={callAllTenants}
        >
          {submitting ? "Loading..." : "Get All Tenants"}
        </button>
        <table className="shadow-lg w-full ml-auto mr-auto my-6 border rounded-lg">
          <tbody>
            <tr className="rounded-lg bg-red-600 overflow-hidden">
              <th className="border text-left px-8 py-4">Sl.No</th>
              <th className="border text-left px-8 py-4">Room No</th>
              <th className="border text-left px-8 py-4">Name</th>
              <th className="border text-left px-8 py-4">Phone No</th>
              <th className="border text-left px-8 py-4">Upcoming Rent Date</th>
              <th className="border text-left px-8 py-4">Amount</th>
            </tr>
            {allTenants.map((tenant, idx) => (
              <tr key={tenant._id}>
                <td className="border px-8 py-4">{idx + 1}</td>
                <td className="border px-8 py-4">{tenant.room_no}</td>
                <td className="border px-8 py-4">{tenant.name}</td>
                <td className="border px-8 py-4">{tenant.phone_no}</td>
                <td className="border px-8 py-4">
                  {tenant.join_date.slice(0, 10)}
                </td>
                <td className="border px-8 py-4">{tenant.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default all_tenants;
