import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    const { clerkId, emailAddresses, firstName, profileImageUrl } = event.data;

    const user = new User({
      clerkId,
      email: emailAddresses[0].emailAddress,
      name: firstName,
      profileImage: profileImageUrl,
    });

    await user.save();
  }
);

const DeleteUserFromDB = inngest.createFunction(
  { id: "delete-user" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    const { id: clerkId } = event.data;
    await User.findOneAndDelete({ clerkId });
  }
);

export const functions = [syncUser, DeleteUserFromDB];
