import express from 'express'
import commentService from '../services/comment-service.js';
const router = express.Router()


router.get('/', async (req, res) => {
   const postId = req.query.postId;
   let comments = [];
   if (postId) {
     comments = await commentService.getCommentsByPostId(postId);
   } else {
     comments = await commentService.getAllComments();
   }
   res.status(200).send(comments);
 });
// // Get all comments
// router.get('/', async (req, res) => {
//    const comments = await commentService.getAllComments()
//    res.status(200).send(comments)
// });
// Create a new comment
router.post('/', async (req, res) => {
   const newComment = await commentService.addNewComment(req.body)
   res.status(201).send(newComment)
});;

router.get('/:id', async (req, res) => {
   const comment = await commentService.getCommentById(req.params.id)
   if (!comment) return res.status(404).send({ msg: "Comment not found" });
   res.status(200).send(comment)
});


// Update a comment by id
router.put('/:id',async (req, res) => {
   const {id} = req.params
   const updatedComment = req.body
   const comment = await commentService.updateCommentById(id,updatedComment)
   if (!comment) return res.status(404).send({ msg: "can't update a comment that doesn't exist " });
   res.status(201).send(comment)
});;
// Delete a comment by id
router.delete('/:id', async(req, res) => {
   await commentService.deleteCommentById(req.params.id)
   res.json({ msg: ` Delete a comments by id ${req.params.id}` })
});;
export default router;