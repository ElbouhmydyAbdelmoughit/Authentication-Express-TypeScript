import { CreateUserInput } from "./../schema/user.schema";
import { Request, Response } from "express";



let createUserhandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) => {
  const body = req.body
};

export default createUserhandler;
