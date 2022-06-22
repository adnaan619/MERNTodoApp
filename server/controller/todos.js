import mongoose from 'mongoose';
import Todo from '../models/todos.js';

export const readTodos = async(req, res)=> {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);

    }catch (error){
        res.status(409).json({error: error .message})
    }
}