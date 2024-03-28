import { Request, Response } from 'express'

import User from '../models/User';

export function helloWorld (req: Request, res: Response): Response { 
  return res.send('hello world');
}

export async function createUser (req: Request, res: Response): Promise<Response> {
  const { id, name, password, username } = req.body;
  console.log('Creating user');
  const newUser = {
    id: id,
    name: name,
    password: password,
    username: username
  }
  const user = new User(newUser);
  await user.save();
  console.log(user);

  return res.json({
    message: "User created",
    user
  });
}

export async function getUsers (req: Request, res: Response): Promise<Response> {
  console.log('Get users');
  const users = await User.find();
  return res.json(users);
}

export async function getUser(req: Request, res: Response): Promise<Response> {
  console.log('Get user');
  const id = req.params.id;
  const user = await User.findById(id);
  return res.json(user);
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
  console.log('Delete user');
  const id = req.params.id;
  const user = await User.findByIdAndRemove(id);
  return res.json({
    message: "User deleted",
    user
  });
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
  console.log('Update user');
  const _id = req.params.id;
  const { id, name, password, username } = req.body;
  const user = await User.findByIdAndUpdate(_id, {
    id,
    name,
    password,
    username
  }, {new: true});
  return res.json({
    message: "User updated",
    user
  });
}
