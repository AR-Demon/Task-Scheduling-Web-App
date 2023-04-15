import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    userId:{},
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;