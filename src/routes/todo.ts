import { Router } from 'express';
const router = Router();

import { createTodo, getTodos, getTodo, deleteTodo, updateTodo } from '../controllers/todo.controller'

import { verifyToken, isOwner } from '../middlewares/authJWT'

router.get( "/", getTodos );

router.post( "/", [verifyToken], createTodo );

router.get( "/:id", getTodo );

router.delete( "/:id", [verifyToken, isOwner], deleteTodo );

router.put ( "/:id", [verifyToken, isOwner], updateTodo );

export default router;

