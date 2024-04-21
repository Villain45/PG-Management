import Person from "@/models/person";
import RentStatus from "@/models/rentStatus";
import { connectionToDB } from "@/utils/database";

export const GET = async () => {
  try {
    await connectionToDB();
    const dateToday =
      new Date().getFullYear() +
      "-" +
      ("0" + (new Date().getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + new Date().getDate()).slice(-2);
    const rentArrears = await Person.find({
      join_date: { $eq: new Date(dateToday) },
    });
    rentArrears.map(async (rent) => {
      const check = await RentStatus.findOne({ pendingRent: rent._id });
      // console.log(check);
      if (!check) {
        const tenant = new RentStatus({
          pendingRent: rent._id,
        });
        await tenant.save();
      }
    });
    const allTenants = await RentStatus.find({}).populate("pendingRent");
    return new Response(JSON.stringify(allTenants), {
      status: 201,
      statusText: "Updated Tenants",
    });
  } catch (error) {
    console.log(error)
    return new Response(error, { status: 500, statusText: error.message });
  }
};
