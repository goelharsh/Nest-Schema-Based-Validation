import { JobType } from "../constants/jobs.constants";

// we have marked things optional using ? 
export class CreateJobDTO {
  companyName: string;
  title: string;
  email: string;
  type?: JobType;
  experience: number;
  salary: number;
  tags?: string[];
  isActive?: boolean;
}