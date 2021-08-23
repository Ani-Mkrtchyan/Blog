import express from "express";
import { blogController } from "../controllers/blogController";


export const blogRouter = express.Router();


blogRouter.route( "/" )
           .get( blogController.getBlogs )
           .post( blogController.createBlog );
 blogRouter.route( "/:id" )
 
           .get( blogController.getBlogById )
           .put( blogController.updateBlog )
           .delete( blogController.deleteBlog );





