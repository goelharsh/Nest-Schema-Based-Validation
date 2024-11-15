import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException,
  } from "@nestjs/common";
  import { ObjectSchema } from "joi";
  
  @Injectable()

  // -  so here we making our own custom pipe and thats we we have decorated the class uisng Injectable

  // -  
  export class JoiValidationPipe implements PipeTransform {

    // ObjectSchema coming from /common package -> means that hum isme kisi bhi trh ka object pass kr skte hain 
    constructor(private schema: ObjectSchema) {}
  
    // hmne apne pipe ko optional value deni hai ie ek schema dena hai so uske liye hum contstrucor use krte hia 
    transform(value: any, metadata: ArgumentMetadata) {
      const { error } = this.schema.validate(value);
  
      if (error) {
        throw new BadRequestException({
          error: "Validation failed",
          message: error.message.replace(/(\"|\[|\d\])/g, ""),
        });
      }
  
      return value;

      // now we can use this pipe 
    }
  }