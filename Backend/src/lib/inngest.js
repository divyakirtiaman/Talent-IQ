import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";
import { upsetStreamUser } from "./stream.js";

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
    await upsetStreamUser({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      image: user.profileImage,      
    }); 

  }
);

const DeleteUserFromDB = inngest.createFunction(
  { id: "delete-user" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();

    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
    await deleteStreamUser(id.toString());


  }
);

export const functions = [syncUser, DeleteUserFromDB];
