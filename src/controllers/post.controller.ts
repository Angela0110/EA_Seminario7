import { Request, Response } from 'express'

import Post from '../models/Post'

export async function createPost (req: Request, res: Response): Promise<Response> {
    const { title, content, author } = req.body;
    console.log('Creating post');
    const newPost = {
        title : title,
        content : content,
        author : author
    }
    const post = new Post(newPost);
    await post.save();
    console.log(post);
  
    return res.json({
      message: "Todo created",
      post
    });
  }
  

export async function updatePost(req: Request, res: Response): Promise<Response> {
    console.log('Update post');
    const _id = req.params.id;
    const { title, content, author } = req.body;
    const post = await Post.findByIdAndUpdate(_id, {
      title,
      content,
      author
    }, {new: true});
    return res.json({
      message: "Post updated",
      post
    });
}