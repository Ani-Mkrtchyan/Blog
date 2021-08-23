export  class HttpException extends Error{
  statusCode?:number;
  message:string;
  error:string|null;
  status:any;
  constructor(statusCode:number,message:string, error?:string){
    super(message);
    this.statusCode=statusCode;
    this.message =message;
    this.error=error || null;
  }
  }