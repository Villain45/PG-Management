"use client";

import toast from "react-hot-toast";

const TableData = ({ tenant, callTenants, submitting, setSubmitting }) => {
  const handleRemoveOne = async (element) => {
    setSubmitting(true)
    try {
      const response = await fetch("/api/update_rent", {
        method: "PUT",
        body: JSON.stringify({
          delId: element.target.id,
        }),
      });
      if (response.ok) {
        toast.success(response.statusText + " Paid");
        callTenants();
      } else toast.error(response.statusText);
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  };
  return (
    <tr key={tenant._id}>
      <td className="border px-8 py-4">{tenant.pendingRent.room_no}</td>
      <td className="border px-8 py-4">{tenant.pendingRent.name}</td>
      <td className="border px-8 py-4">{tenant.pendingRent.phone_no}</td>
      <td className="border px-8 py-4">
        {tenant.pendingRent.join_date.slice(0, 10)}
      </td>
      <td className="border px-8 py-4">{tenant.pendingRent.amount}</td>
      <td className="border px-8 py-4">
        <input
          type="checkbox"
          id={tenant._id}
          className="w-full h-4"
          onChange={handleRemoveOne}
        />
      </td>
    </tr>
  );
};

export default TableData;
