import Comment from "../models/comment-model.js"

const updateCommentById = async (pId, newContent) => {
    return Comment.update(
        {content: newContent.content, isEdited: true},
        { where: { id: pId } }
    );
}


const getCommentById = (pId) => {
    return Comment.findOne({
        where: {
            id: pId
        }
    })
}
const deleteCommentById = async (pId) => {
    return Comment.destroy({
        where: {
            id: pId
        }
    })
}
const getAllComments = async () => {
    return Comment.findAll()
}
const addNewComment = async (pComment) => {
    return Comment.create(pComment)
}
async function getCommentsByPostId(postId) {
    const comments = await Comment.findAll({
      where: { postId: postId }
    });
    return comments;
  }

export default {
    getCommentsByPostId,
    updateCommentById,
    getCommentById, 
    deleteCommentById,
    addNewComment,
    getAllComments
}