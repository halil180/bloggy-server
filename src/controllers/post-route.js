import express from 'express'
const router = express.Router()
import postService from "../services/post-service.js"


// Get all posts
router.get('/', async (req, res) => {
   const posts = await postService.getAllPosts()
   res.status(200).send(posts)
});

// Create a new post
router.post('/', async (req, res) => {
   //  res.json({msg:"Create a new post"})
   const newPost = await postService.createPost(req.body)
   res.status(201).send(newPost)
});;

// Get a single post by id
router.get('/:id', async (req, res) => {
   try {
      const postId = req.params.id
      const selectedPost = await postService.getPostById(postId);
      res.status(200).send(selectedPost);
   } catch (err) {
      res.status(500).send({ error: err.message });
   }
});;
// Update a post by id
router.put('/:id', async (req, res) => {
   const {id} = req.params
   const updatedPost = req.body
   const post = await postService.updatePost(id,updatedPost)
   res.status(200).send(post);
});;

// Delete a post by id
router.delete('/:id', async (req, res) => {
   const post = await postService.deletePostById(req.params.id)
   res.send(`post ${req.params.id} deleted`)
});;

export default router;