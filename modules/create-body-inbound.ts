import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {

  // Stringify the object
  var model = request.query.model;
  if(!model){
    model = 'gpt-4.1-nano';
  }
  context.log.info(request.query);
  context.log.info(model);

  var prompt = {'model': model ,'input': 'Provide a one-line brief fun fact about animals of the "mammalia" class','max_output_tokens': 20,'service_tier': 'default','temperature': 0.8};
  const body = JSON.stringify(prompt);

  // Return a new request based on the
  // original but with the new body
  return new ZuploRequest(request, { body });
}