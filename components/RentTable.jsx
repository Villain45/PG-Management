import TableData from "./TableData";

const RentTable = ({ tenants, setTenants, submitting, setSubmitting }) => {
  const callTenants = async (e) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/rent_status");
      const allTenants = await response.json();
      await setTenants(allTenants);
    }catch(error) {
      console.log(error)
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <table className="shadow-lg w-5/6 ml-auto mr-auto my-6 border rounded-lg">
      <tbody>
        <tr className="rounded-lg bg-red-600 overflow-hidden">
          <th className="border text-left px-8 py-4">Room No</th>
          <th className="border text-left px-8 py-4">Name</th>
          <th className="border text-left px-8 py-4">Phone No</th>
          <th className="border text-left px-8 py-4">Rent Date</th>
          <th className="border text-left px-8 py-4">Amount</th>
          <th className="border text-left px-8 py-4">Paid?</th>
        </tr>

        {tenants.map((tenant) => (
          <TableData
            key={tenant._id}
            tenant={tenant}
            callTenants={callTenants}
            submitting = {submitting}
            setSubmitting = {setSubmitting}
          />
        ))}
      </tbody>
    </table>
  );
};

export default RentTable;
