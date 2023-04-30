import mongoose from "mongoose";

const userId = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
]

const todoId = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
]

const userStatsId = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
]

export const users = [
    {
        "_id": userId[0],
        "firstName": "Prafful",
        "lastName": "Thapa",
        "userName": "Ar_Demon",
        "email": "random01@gmail.com",
        "password": "$2b$10$HxKeGsEmNnovmgpuOx7vN.qrF/JEGrl9Ylvv7N7HIEjyDh8cikvm2",
        "createdAt": "2023-04-29T07:46:43.552Z",
        "updatedAt": "2023-04-29T07:46:43.552Z",
        "__v": 0
    },
    {
        "_id": userId[1],
        "firstName": "Prafful",
        "lastName": "Thapa",
        "userName": "Ar_Demon",
        "email": "random02@gmail.com",
        "password": "$2b$10$HxKeGsEmNnovmgpuOx7vN.qrF/JEGrl9Ylvv7N7HIEjyDh8cikvm2",
        "createdAt": "2023-04-29T07:46:43.552Z",
        "updatedAt": "2023-04-29T07:46:43.552Z",
        "__v": 0
    },
    {
        "_id": userId[2],
        "firstName": "Prafful",
        "lastName": "Thapa",
        "userName": "Ar_Demon",
        "email": "random03@gmail.com",
        "password": "$2b$10$HxKeGsEmNnovmgpuOx7vN.qrF/JEGrl9Ylvv7N7HIEjyDh8cikvm2",
        "createdAt": "2023-04-29T07:46:43.552Z",
        "updatedAt": "2023-04-29T07:46:43.552Z",
        "__v": 0
    },
    {
        "_id": userId[3],
        "firstName": "Prafful",
        "lastName": "Thapa",
        "userName": "Ar_Demon",
        "email": "random04@gmail.com",
        "password": "$2b$10$HxKeGsEmNnovmgpuOx7vN.qrF/JEGrl9Ylvv7N7HIEjyDh8cikvm2",
        "createdAt": "2023-04-29T07:46:43.552Z",
        "updatedAt": "2023-04-29T07:46:43.552Z",
        "__v": 0
    }
];
export const todo = [
    //for email 1 and user [0]
    {
        "userId": userId[0],
        "userName": "ar",
        "email": "random01@gmail.com",
        "content": "#001 TODO",
        "description": "This is First todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[0],
        "userName": "ar",
        "email": "random01@gmail.com",
        "content": "#002 TODO",
        "description": "This is Second todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[0],
        "userName": "ar",
        "email": "random01@gmail.com",
        "content": "#003 TODO",
        "description": "This is Third todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[0],
        "userName": "ar",
        "email": "random01@gmail.com",
        "content": "#004 TODO",
        "description": "This is Fourth todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    //for email 2 and user[1]
    {
        "userId": userId[1],
        "userName": "ar",
        "email": "random02@gmail.com",
        "content": "#001 TODO",
        "description": "This is First todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[1],
        "userName": "ar",
        "email": "random02@gmail.com",
        "content": "#002 TODO",
        "description": "This is Second todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[1],
        "userName": "ar",
        "email": "random02@gmail.com",
        "content": "#003 TODO",
        "description": "This is Third todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[1],
        "userName": "ar",
        "email": "random02@gmail.com",
        "content": "#004 TODO",
        "description": "This is Fourth todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    //for email 3 and user [2]
    {
        "userId": userId[2],
        "userName": "ar",
        "email": "random03@gmail.com",
        "content": "#001 TODO",
        "description": "This is First todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[2],
        "userName": "ar",
        "email": "random03@gmail.com",
        "content": "#002 TODO",
        "description": "This is Second todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[2],
        "userName": "ar",
        "email": "random03@gmail.com",
        "content": "#003 TODO",
        "description": "This is Third todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[2],
        "userName": "ar",
        "email": "random03@gmail.com",
        "content": "#004 TODO",
        "description": "This is Fourth todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    //for email 4 and user [3]
    {
        "userId": userId[3],
        "userName": "ar",
        "email": "random04@gmail.com",
        "content": "#001 TODO",
        "description": "This is First todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[3],
        "userName": "ar",
        "email": "random04@gmail.com",
        "content": "#002 TODO",
        "description": "This is Second todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[3],
        "userName": "ar",
        "email": "random04@gmail.com",
        "content": "#003 TODO",
        "description": "This is Third todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    },
    {
        "userId": userId[3],
        "userName": "ar",
        "email": "random04@gmail.com",
        "content": "#004 TODO",
        "description": "This is Fourth todo",
        "priority": 3,
        "label": "TODAY",
        "attachedAttribute": "Intelligence",
        "checked": false,
        "completed_at": "2023-04-29T08:08:32.674Z",
        "due": {
            "_date": "2023-04-29T08:08:32.674Z",
            "date": "2023-04-29T08:08:32.674Z",
            "isRecurring": false,
            "string": "TODAY"
        },
        "_id": new mongoose.Types.ObjectId(),
        "createdAt": "2023-04-29T08:08:32.679Z",
        "updatedAt": "2023-04-29T08:08:32.679Z",
        "__v": 0
    }
];

export const userStats = [
    {
        "user_Id": userId[0],
        "userLevel": 1,
        "userLevelExp": 0,
        "userAttribute": {
            "strengthLevel": 1,
            "strengthStatus": 0,
            "strengthXp": 0,
            "intelligenceLevel": 1,
            "intelligenceStatus": 0,
            "intelligenceXp": 0,
            "healthLevel": 1,
            "healthStatus": 0,
            "healthXp": 0,
            "charismaLevel": 1,
            "charismaStatus": 0,
            "charismaXp": 0,
            "creativityLevel": 1,
            "creativityStatus": 0,
            "creativityXp": 0
        },
        "_id": userStatsId[0],
        "createdAt": "2023-04-29T08:00:08.824Z",
        "updatedAt": "2023-04-29T08:00:08.824Z",
        "__v": 0
    },
    {
        "user_Id": userId[1],
        "userLevel": 1,
        "userLevelExp": 0,
        "userAttribute": {
            "strengthLevel": 1,
            "strengthStatus": 0,
            "strengthXp": 0,
            "intelligenceLevel": 1,
            "intelligenceStatus": 0,
            "intelligenceXp": 0,
            "healthLevel": 1,
            "healthStatus": 0,
            "healthXp": 0,
            "charismaLevel": 1,
            "charismaStatus": 0,
            "charismaXp": 0,
            "creativityLevel": 1,
            "creativityStatus": 0,
            "creativityXp": 0
        },
        "_id": userStatsId[1],
        "createdAt": "2023-04-29T08:00:08.824Z",
        "updatedAt": "2023-04-29T08:00:08.824Z",
        "__v": 0
    },
    {
        "user_Id": userId[2],
        "userLevel": 1,
        "userLevelExp": 0,
        "userAttribute": {
            "strengthLevel": 1,
            "strengthStatus": 0,
            "strengthXp": 0,
            "intelligenceLevel": 1,
            "intelligenceStatus": 0,
            "intelligenceXp": 0,
            "healthLevel": 1,
            "healthStatus": 0,
            "healthXp": 0,
            "charismaLevel": 1,
            "charismaStatus": 0,
            "charismaXp": 0,
            "creativityLevel": 1,
            "creativityStatus": 0,
            "creativityXp": 0
        },
        "_id": userStatsId[2],
        "createdAt": "2023-04-29T08:00:08.824Z",
        "updatedAt": "2023-04-29T08:00:08.824Z",
        "__v": 0
    },
    {
        "user_Id": userId[3],
        "userLevel": 1,
        "userLevelExp": 0,
        "userAttribute": {
            "strengthLevel": 1,
            "strengthStatus": 0,
            "strengthXp": 0,
            "intelligenceLevel": 1,
            "intelligenceStatus": 0,
            "intelligenceXp": 0,
            "healthLevel": 1,
            "healthStatus": 0,
            "healthXp": 0,
            "charismaLevel": 1,
            "charismaStatus": 0,
            "charismaXp": 0,
            "creativityLevel": 1,
            "creativityStatus": 0,
            "creativityXp": 0
        },
        "_id": userStatsId[3],
        "createdAt": "2023-04-29T08:00:08.824Z",
        "updatedAt": "2023-04-29T08:00:08.824Z",
        "__v": 0
    }
];
