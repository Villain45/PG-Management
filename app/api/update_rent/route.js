import Person from "@/models/person";
import RentStatus from "@/models/rentStatus";
import { connectionToDB } from "@/utils/database";
import mongoose, { get } from "mongoose";
export const revalidate = 0;
export const PUT = async (req) => {
  const { delId } = await req.json();
  try {
    await connectionToDB();
    const id = new mongoose.Types.ObjectId(delId);
    const checkTenant = await RentStatus.findByIdAndDelete(id);
    const pipeline = [
      {
        $match: {
          _id: checkTenant.pendingRent._id,
        },
      },
      {
        $project: {
          day: { $dayOfMonth: "$join_date" },
          month: { $month: "$join_date" },
          year: { $year: "$join_date" },
        },
      },
    ];
    const getDate = await Person.aggregate(pipeline);
    const updateTenant = await Person.findByIdAndUpdate(
      checkTenant.pendingRent._id,
      {
        join_date: new Date(
          getDate[0].year,
          getDate[0].month,
          getDate[0].day
        ),
      }
    );
    return new Response(updateTenant, {
      status: 201,
      statusText: updateTenant.name,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to mark as paid", { status: 500, statusText: "Failed to mark as paid" });
  }
};
