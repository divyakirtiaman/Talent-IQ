<<<<<<< HEAD
import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    console.log("Clerk event:", event.data); // DEBUG

    const { id, email_addresses, first_name, image_url } = event.data;

    const user = new User({
      clerkId: id,
      email: email_addresses[0].email_address,
      name: first_name,
      profileImage: image_url,
    });

    await user.save();
    console.log("User saved in MongoDB ✅");
  }
);

const DeleteUserFromDB = inngest.createFunction(
  { id: "delete-user" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();

    const { id } = event.data;
    await User.findOneAndDelete({ clerkId: id });

    console.log("User deleted from MongoDB ✅");
  }
);

export const functions = [syncUser, DeleteUserFromDB];
=======
import { Inngest } from "inngest/nextjs";
import { connectDB } from "./db";
import User from "../models/User.js";

export const inngest = new Inngest({id: "talent-iq"});

const syncUser=inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user.created"},
    async({event})=>{
        await connectDB();
        const {clerkId, emailAddresses, firstName, profileImageUrl}=event.data;
        const user=new User({
            clerkId,
            email: emailAddresses[0].emailAddress,
            name: firstName,
            profileImage: profileImageUrl,
        });
        await user.save();
    }
);

const DeleteUser=inngest.createFunction(
    {id:"delete-user"},
    {event:"clerk/user.deleted"},   

    async({event})=>{
        await connectDB();
        const {id:clerkId}=event.data;
        await User.findOneAndDelete

({clerkId});
});
export const inngestFunctions=[syncUser, DeleteUser];
>>>>>>> bc6eac09e8608a27daa363df96b6f60afab6bb0f
