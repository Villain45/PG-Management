// "use client";
const Form = ({ person, setPerson, handleSubmit, submitting }) => {
  return (
    <section className="mt-16 w-full flex items-center justify-center">
      <form className="w-1/3 flex-col flex gap-7" onSubmit={handleSubmit}>
        <label>
          <span className="font-bold text-lg">Room No</span>
          <input
            required
            value={person.roomNo}
            onChange={(e) => setPerson({ ...person, roomNo: e.target.value })}
            placeholder="Room No"
            type="text"
            className="w-full flex rounded-lg mt-2 p-2 text-sm text-gray-700 outline-0"
          />
        </label>
        <label>
          <span className="font-bold text-lg">Name</span>
          <input
            required
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
            placeholder="Name"
            type="text"
            className="w-full flex rounded-lg mt-2 p-2 text-sm text-gray-700 outline-0"
          />
        </label>
        <label>
          <span className="font-bold text-lg">Phone Number</span>
          <input
            required
            value={person.phoneNo}
            onChange={(e) => setPerson({ ...person, phoneNo: e.target.value })}
            placeholder="Phone No"
            type="text"
            className="w-full flex rounded-lg mt-2 p-2 text-sm text-gray-700 outline-0"
          />
        </label>
        <label>
          <span className="font-bold text-lg">Join Date</span>
          <input
            required
            value={person.joindate}
            onChange={(e) => setPerson({ ...person, joindate: e.target.value })}
            placeholder="Join Date"
            type="date"
            className="w-full flex rounded-lg mt-2 p-2 text-sm text-gray-700 outline-0 date_indicator"
          />
        </label>
        <label>
          <span className="font-bold text-lg">Rent Amount</span>
          <input
            required
            value={person.amount}
            onChange={(e) => setPerson({ ...person, amount: e.target.value })}
            placeholder="Amount"
            type="text"
            className="w-full flex rounded-lg mt-2 p-2 text-sm text-gray-700 outline-0"
          />
        </label>
        <div className="flex items-end justify-end w-full">
          <button
            type="submit"
            className="w-24 rounded-lg p-2 mt-2 bg-white text-black font-bold text-center"
          >
            {submitting ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
