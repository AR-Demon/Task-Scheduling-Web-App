import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
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
        type:Array,
        required:false,
    },
    attribute:{
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
            type: Timestamp,
            required: true,
        },
        date:{
            type: Date,
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
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;