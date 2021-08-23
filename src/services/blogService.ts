 import { blogController } from '../controllers/blogController';
 import { blogs} from '../data/blog';

 class BlogService {
  
   
   getBlogs = ( blogs : any ) => {
    return  blogs;
  }

  getBlogById = async ( id : number ) => blogs[id];

  createBlog = async( data:any ) => {

     let blogIds = blogs.map( blog => blog.id );
     let blogId = blogIds.length > 0 ? Math.max.apply(Math, blogIds) + 1 : 1;
     
     const newBlog = Object.assign( {id: blogId}, data );
      blogs.push( newBlog );
      
      return newBlog;
  };

  updateBlog = async( id:any,blogUpdate: any) => {
    const blog:any = await blogController.updateBlog( id, blogUpdate) ;
    if( !blog ) {
      return null;
    }
    blogs[id] = { id,...blogUpdate };
    return blogs[id];
  };

  deleteBlog = async (id:number) => {
    const blog = await blogController.deleteBlog;
    
    delete blogs[id];
  
    };

  }


 export const blogService = new BlogService();