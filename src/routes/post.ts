import { Router } from 'express';
const router = Router();

import { createPost, updatePost } from '../controllers/post.controller'
import { isOwner, verifyToken } from '../middlewares/authJWT';

router.post( "/", [verifyToken], createPost );

router.put ( "/:id", [verifyToken, isOwner], updatePost );


export default router;