import commentRepository from "../data/comment-repository.js"

const updateCommentById =async(pId,updatedComment)=>{
    return await commentRepository.updateCommentById(pId,updatedComment)
}
const getCommentById =async (pId) => {
    return await commentRepository.getCommentById(pId)
}
const deleteCommentById = async (pId) => {
    return await commentRepository.deleteCommentById(pId)
}
const getAllComments = async () => {
    return await commentRepository.getAllComments()
}
const addNewComment = async (pComment) => {
    return await commentRepository.addNewComment(pComment)
}

const  getCommentsByPostId =async (pPostId) => {
    return await commentRepository.getCommentsByPostId(pPostId)
}
export default {
    getCommentsByPostId,
    updateCommentById,
    getCommentById,
    deleteCommentById,
    getAllComments,
    addNewComment
}