import Person from "@/models/person";
import { connectionToDB } from "@/utils/database";

export const POST = async (req) => {
  const { roomNo, name, phoneNo, joindate, amount } = await req.json();
  try {
    await connectionToDB();
    const check = await Person.findOne({ phone_no: phoneNo });
    if (!check) {
      const newPerson = new Person({
        room_no: roomNo,
        name: name,
        phone_no: phoneNo,
        join_date: joindate,
        amount: amount,
      });
      await newPerson.save();
      return new Response(JSON.stringify(newPerson), { status: 201 });
    } else {
      return new Response("Record already exists", {
        status: 400,
        statusText: "Same Phone Number already exists",
      });
    }
  } catch (error) {
    return new Response(error, {
      status: 500,
      statusText: "Unable to add in database",
    });
  }
};
