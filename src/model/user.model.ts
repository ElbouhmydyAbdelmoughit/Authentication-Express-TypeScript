import {
  getModelForClass,
  modelOptions,
  pre,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { nanoid } from "nanoid";
import argon2 from "argon2";

@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const hash = argon2.hash(this.password);
  this.password = hash
  return;
  
})

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class User {
  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ lowercase: true, required: true, unique: true })
  email: string;

  @prop({ required: true })
  password: string;

  @prop({ required: true, default: () => nanoid() })
  verivicationCode: string;

  @prop({})
  passwordResetCode: string | null;

  @prop({ default: false })
  verified: boolean;
}

const UserModel = getModelForClass(User);
export default UserModel;
