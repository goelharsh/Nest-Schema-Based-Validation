
import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { CreateJobDTO } from "../dto/create-job.dto";
import { createJobSchema } from "../schemas/create-job.schema";

import { JobsService } from "../services/jobs.service";
import { JoiValidationPipe } from "../pipes/joi-validation.pipe";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()


  // create job handler handling post request
  // The data reveiving in which body has to validated 

  // Data reveing will be an object (optional field wale data ka dhyan rkhna hai), so lets make dto 
  // dto are in different folder 

  // so data is now of type CreateJobDTO

  // abhi hmne jo dto bnaya hai usme khi bhi validation nhi hai , 
  // so to validate 

  // so uske liye hme ek schema chahiye hoga jiske against hum data ko validate krenge 

  // nom i joi --save

  // now we have to make schema 
  
  // and now we will use the shcema in pipe and now we will make our pipe 


  // Now hmne pipe bnalia to ab hum ya to method me hi dedenge pipe ya fir hum as a decorator bhi de skte hain 

  // To give in method :
  // createJob(@Body(new JoiValidationPipe(createJobSchema)) createJobDto: CreateJobDTO) {
    // return this.jobsService.createJob(createJobDto);
  // }

  // Otherwise we can use decorator 
  @UsePipes(new JoiValidationPipe(createJobSchema))
  createJob(@Body() createJobDto: CreateJobDTO) {
    return this.jobsService.createJob(createJobDto);
  }
}
