import Post from "../models/post-model.js";

const deletePostById = async(pId) => {
    return await Post.destroy({
        where:{
            id:pId
        }
    })
}
const  getAllPosts = async() => {
    const posts = await Post.findAll();
    return posts
}

const createPost = async (pPost) => {
    try {
        const newPost = await Post.create(pPost);
        return newPost;
    } catch (err) {
        console.log(err);
    }
}

const getPostById = async (postId) => {
    const post = await Post.findOne({ where: { id: postId } });
    if (post === null) return { msg: `post with the id ${postId} Not found!` }
    return post;
}
const updatePost = async(pId,updatedPost) => {
    try {
        const post = await Post.findByPk(pId);
        if (post) {
            await Post.update(updatedPost, { where: { id: pId } });
            return { msg: "post updated successfully" };
        }
        return { msg: "No post found with this ID" };
    } catch (error) {
        console.log(error);
    }
}
export default {
    updatePost,
    deletePostById,
    createPost,
    getPostById,
    getAllPosts
}