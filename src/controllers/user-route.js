import express from 'express'
const router = express.Router()
import userService from '../services/user-service.js';

// Get all users
router.get('/', async (req, res) => {
    const users = await userService.getUsers()
    res.status(200).send(users)
});

// Create a new users
router.post('/', async (req, res) => {
    const user = await userService.createUser(req.body)
    res.status(201).send(user)
});;

router.post("/check", async (req, res)=>{
    const auth0User = req.body;
    // const avatar = `https://avatars.dicebear.com/api/adventurer-neutral/${user.first_name}.svg`
   
    const user = {
        email: auth0User.email,
        name: auth0User.given_name, 
       };
    // avatar:`https://avatars.dicebear.com/api/adventurer-neutral/${auth0User.given_name}.svg`
    const status = await userService.checkUser(user); // firstname, lastname, email
    res.status(200).send(status);
  })
  
  
// Get a users  by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await userService.getUserById(id)
    if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
    res.status(200).send(user)

});;

// Update a users by id
router.put('/:id', (req, res) => {
    res.json({ msg: "Update a users by id" })
});;

// Delete a users by id
router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await userService.deleteUserById(id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.send(`user with the id ${id} deleted`)
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: `Failed to delete user ${err}` });
    }
});;


export default router;