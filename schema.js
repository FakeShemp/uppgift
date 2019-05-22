import { Schema, model } from 'mongoose';

const Post = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        userId: {
            type: Number,
            required: true
        },
        id: {
            type: Number,
            unique: true
        }
    });

const User = new Schema(
    {
        name: String,
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            street: String,
            suite: String,
            city: String,
            zipcode: String,
            geo: {
                lat: Number,
                lng: Number
            }
        },
        id: {
            type: Number,
            required: true,
            unique: true
        },
    }
)

const PostModel = model('post', Post);
const UserModel = model('user', User);

export { PostModel, UserModel };