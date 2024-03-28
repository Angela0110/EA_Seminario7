import { Router } from 'express';
const router = Router();

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/user.controller'

router.route('/')
  .post(createUser)
  .get(getUsers)

router.route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser)

export default router;
