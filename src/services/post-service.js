import postRepository from "../data/post-repository.js";

const deletePostById = async (pId) => {
    return await postRepository.deletePostById(pId);
};
const getAllPosts = async () => {
    return await postRepository.getAllPosts();
};

const createPost = async (pUser) => {
    return await postRepository.createPost(pUser);
};

const getPostById = async (postId) => {
    return await postRepository.getPostById(postId);
};
const updatePost = async (pId, pUpdatedPost) => {
    return await postRepository.updatePost(pId, pUpdatedPost);
};

export default {
    updatePost,
    deletePostById,
    createPost,
    getPostById,
    getAllPosts,
};
