import jwt from "jsonwebtoken";
export function jwtSign(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET as string);
}
