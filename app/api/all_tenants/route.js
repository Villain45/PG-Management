import Person from "@/models/person";
import { connectionToDB } from "@/utils/database"
export const revalidate = 0;

export const GET =async(req) => {
    try {
        await connectionToDB();
        const all_tenants = await Person.find({});
        return new Response(JSON.stringify(all_tenants),{status:200,statusText:"Fetched all tenants"})
    } catch(error) {
        console.log(error);
        return new Response("Failed to fetch tenants",{status:500,statusText:error.message});
    }
}