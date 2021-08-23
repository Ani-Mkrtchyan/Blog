import {Express, Response, Request, NextFunction} from 'express';
import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware';
import { notFoundHandler } from './middleware/notFoundMiddleware';

 import  {blogRouter}  from './routes/blogRoute';

dotenv.config();
export const PORT = process.env.PORT || 4000;
export const getApp = (): Express => {
  const app = express();
  app.use(express.json());
  app.use("/blogs", blogRouter);
  app.use(errorHandler);
  app.use(notFoundHandler);
  
 
    return app;
};





    
    
    


    