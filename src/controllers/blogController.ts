 import { blogService } from '../services/blogService';
 import  { Request, Response } from "express";
 import {blogs} from '../data/blog';

 class BlogController {

  //READ
  async getBlogs(req : Request, res : Response) {
   
    try {
     res.status( 200 ).send(await blogService.getBlogs(blogs) );
   
    } catch( e ) {

      res.status(500).send(e.message);

}
  }

// READ

  async getBlogById( req : Request, res : Response ) {
    
    const id: number = parseInt(req.params.id);
    try {

      const blog:[] = await blogService.getBlogById( id );
      
      if( blog ) {
      return res.status(200).send(blog);
      }
      res.status(400).send('blog not found');
  
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

//  CREATE

async createBlog( req : Request, res : Response) {
  
    try {

    const newBlog = await blogService.createBlog(req.body);
     res.status(201).send(newBlog);

  } catch (e) {
    res.status(500).send(e.message);
  }
};

// UPDATE

async  updateBlog (req : Request, res : Response ) {
  const id: number = parseInt(req.params.id);
  try{
    const blogUpdate: any[] = req.body;
    const existingBlog: any[] = await blogService.updateBlog( id, blogUpdate );
    
    if( existingBlog ) {
      const updateBlog = await blogService.updateBlog(id, blogUpdate);
    return res.status(200).send(updateBlog);
    }
    const newBlog = await blogService.createBlog(blogUpdate);
    res.status(201).send(newBlog);

  } catch (e) {
    res.status(500).send(e.message);
  }
};


// DELETE

async deleteBlog( req : Request, res : Response ) {
  
   try {
    const id: number = parseInt( req.params.id );
     await blogService.deleteBlog( id );
    
    res.sendStatus(204);
    }
    
   catch (e) {
    res.status(500).send(e.message);
  }
};
}
 
 export const blogController = new BlogController();

