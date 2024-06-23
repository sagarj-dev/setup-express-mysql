import { Types } from "mongoose";
export interface IUser {
  name: string;
  password: string;
  email: string;
}

export interface IUserMethods {
  checkPassword: (password: string) => Promise<boolean>;
}

declare module "express-serve-static-core" {
  export interface Request {
    user: ({ _id: Types.ObjectId } & IUser) | null;
  }
}
