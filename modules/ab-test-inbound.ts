import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  // Generate a random number to segment the test groups
  const score = Math.random();

  if (score < 0.5) {
    return new Response('Bad luck! You got the fake error reponse', {status: 500});
  } 

  return request;
}