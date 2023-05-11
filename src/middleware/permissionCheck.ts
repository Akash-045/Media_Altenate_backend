import { Response, Request, NextFunction } from "express";

import { ForbiddenError } from "../helper/apiError";
import { UserDocument } from "../models/User";

const mappings = {
  GET: "READ",
  POST: "CREATE",
  PUT: "UPDATE",
  DELETE: "DELETE",
};

// authorization
const permissionCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = (req as any).user as UserDocument;

  const userRoles = userData.permissions;
  const requestMethod = req.method as keyof typeof mappings;

  const isIncluded = userRoles.some(
    (item) => item.access === mappings[requestMethod]
  );

  if (isIncluded) {
    next();
  } else {
    next(new ForbiddenError());
  }
};
export default permissionCheck;