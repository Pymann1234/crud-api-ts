import { Request, Response } from "express";
import { User } from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    // Add validation here if needed
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
    console.error(err);
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
    console.error(err);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) res.status(200).json(user);
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
    console.error(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    // Add validation here if needed
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (user) res.status(200).json(user);
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
    console.error(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (deleted) res.json({ message: "User deleted" });
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
    console.error(err);
  }
};

