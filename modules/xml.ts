import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption: any;
};

export default async function parseXML(
  response: Response,
  request: ZuploRequest,
  context: ZuploContext
) {

  const animals = await response.json();
  context.log.info(animals);
  const data: { id: string; specie: string }[] =
    animals.values.animal.map(
      (a) => ({
        id: a.id,
        specie: a.specie,
      }),
    );

  return new Response(JSON.stringify({ total: data.length, data }), {
    headers: response.headers,
    status: response.status,
    statusText: response.statusText,
  });
}



