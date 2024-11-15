import * as Joi from "joi";
import { JobType } from "../constants/jobs.constants";

// Joi.object means we going to validate an object 
export const createJobSchema = Joi.object({
  companyName: Joi.string().required(),

  title: Joi.string().required(),

  email: Joi.string().email().required(),

  type: Joi.string().valid(...Object.keys(JobType)),

  experience: Joi.number().integer().required(),

  salary: Joi.number().required(),

  tags: Joi.array().items(Joi.string()).min(0),

  isActive: Joi.boolean(),
});