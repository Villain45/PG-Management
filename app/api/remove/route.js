import Person from "@/models/person";
import { connectionToDB } from "@/utils/database";
export const revalidate = 0;
export const DELETE = async (req) => {
  const { phoneNo } = await req.json();
  try {
    await connectionToDB();
    if (phoneNo.trim().length != 10) {
      return new Response("Invalid Phone Number", {
        status: 422,
        statusText: "Invalid Phone Number",
      });
    }
    const result = await Person.findOneAndDelete({ phone_no: phoneNo });
    if (!result) {
      return new Response("Given Phone Number doesn't exist", {
        status: 400,
        statusText: "Given Phone Number doesn't exist",
      });
    }
    return new Response("Deleted the Person", { status: 201 });
  } catch (error) {
    console.log("error", error);
    return new Response(error, { status: 500 });
  }
};
