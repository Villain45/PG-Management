"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useState } from "react";
import toast from "react-hot-toast";

const remove_person = () => {
  const [numberToDel, setNumberToDel] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const removePerson = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/remove", {
        method: "DELETE",
        body: JSON.stringify({
          phoneNo: numberToDel,
        }),
      });
      if (response.ok) toast.success("Person removed successfully");
      else if (response.status === 400)
        toast.error("Given Phone Number doesn't exist");
      else if (response.status === 422) toast.error("Invalid Phone Number");
      else toast.error("Server Error")
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="max-w-full">
      <Nav />
      <section className="mt-20 w-full flex items-center justify-center">
        <form
          onSubmit={removePerson}
          className="mt-5 w-1/3 flex-col flex gap-3"
        >
          <label>
            <span className="font-bold text-lg">Enter the phone number</span>
            <input
              type="text"
              onChange={(e) => setNumberToDel(e.target.value)}
              placeholder="Phone No"
              className="w-full flex rounded-lg mt-2 p-2 text-sm text-gray-700 outline-0"
            />
          </label>
          <div className="flex items-end justify-end w-full">
            <button
              type="submit"
              className="w-24 rounded-lg p-2 mt-2 bg-white text-black font-bold text-center"
            >
              {submitting ? "Loading..." : "Remove"}
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </section>
  );
};

export default remove_person;
