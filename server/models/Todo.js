import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        ref:"User",
    },
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:false,
    },
    content:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    priority:{
        type: Number,
        required: true,
    },
    label:{
        type:String,
        required:false,
    },
    attachedAttribute:{
        type: String,
        required: true,
    },
    checked:{
        type: Boolean,
        required: true,
    },
    completed_at:{
        type: Date,
        required: true,
    },
    due:{
        _date:{
            type: Date,
            required: true,
        },
        date:{
            type: String,
            required: true,
        },
        isRecurring:{
            type: Boolean,
            required: true,
        },
        string:{
            type: String,
            required: true,
        },
    },
},{timestamps:true});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;