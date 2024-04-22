"use client";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Nav from "@/components/Nav";
import { useState } from "react";
import toast from "react-hot-toast";

const add_person = () => {
  const [person, setPerson] = useState({
    roomNo: "",
    name: "",
    phoneNo: "",
    joindate: "",
    amount: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const createPerson = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/add", {
        method: "POST",
        body: JSON.stringify({
          roomNo: person.roomNo,
          name: person.name,
          phoneNo: person.phoneNo,
          joindate: person.joindate,
          amount: person.amount,
        }),
      });
      if (response.ok) toast.success("New Person got added");
      else if (response.status === 400) toast.error("Same Phone Number already exists");
      else if(response.status === 500) toast.error("Unable to add in database, Check the given data");
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="max-w-full">
      <Nav />
      <Form
        person={person}
        setPerson={setPerson}
        handleSubmit={createPerson}
        submitting={submitting}
      />
      <Footer />
    </section>
  );
};

export default add_person;
