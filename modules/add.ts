import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const a = parseInt(request.query.a);
  const b = parseInt(request.query.b);

  return a+b;
}