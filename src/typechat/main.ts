
import { createJsonTranslator, createLanguageModel } from "typechat";
import { createTypeScriptJsonValidator } from "typechat/ts";
import { AgentResponse, agentSchema } from "./Schema";

export const model = createLanguageModel(process.env)

//create a validator
const schema = agentSchema;
const validator = createTypeScriptJsonValidator<AgentResponse>(schema, "AgentResponse")

//create  trnslator
export const translator = createJsonTranslator(model, validator)
