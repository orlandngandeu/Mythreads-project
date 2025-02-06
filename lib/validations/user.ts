import * as z from "zod";

export const userValidation = z.object({
  profile_photo: z
    .string()
    .url()
    .min(1, { message: "URL ne peut pas être vide" }),
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});
