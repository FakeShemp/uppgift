import { PostModel, UserModel } from "../schema";

let getPosts = (req, res, next) => {
    PostModel.find(req.query.userId ? { userId: req.query.userId } : null)
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let postPosts = (req, res, next) => {
    PostModel.create(req.body)
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let getOnePosts = (req, res, next) => {
    PostModel.findOne({ id: req.params.postId })
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let putPosts = (req, res, next) => {
    PostModel.findOne({ id: req.params.postId })
        .then((ret) => {
            PostModel.replaceOne({ id: req.params.postId }, req.body)
                .then((result) => {
                    if (result.ok) {
                        res.status(200).send(ret)
                    }
                })
                .catch((error) => res.status(500).send(error));
        })


}

let patchPosts = (req, res, next) => {
    PostModel.findOneAndUpdate({ id: req.params.postId }, req.body)
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let deletePosts = (req, res, next) => {
    PostModel.findOneAndDelete({ id: req.params.postId })
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let getUsers = (req, res) => {
    UserModel.find()
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let postUsers = (req, res) => {
    UserModel.create(req.body)
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let getOneUsers = (req, res) => {
    UserModel.findOne({ id: req.params.userId })
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let putUsers = (req, res) => {
    UserModel.findOneAndUpdate({ id: req.params.userId })
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

export const posts = {
    get: getPosts,
    post: postPosts,
    getOne: getOnePosts,
    put: putPosts,
    patch: patchPosts,
    delete: deletePosts
};
export const users = {
    get: getUsers,
    post: postUsers,
    getOne: getOneUsers,
    put: putUsers
};