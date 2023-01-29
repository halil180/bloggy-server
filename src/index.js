import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import "./config/Database.js"
import userRoute from './controllers/user-route.js'
import postRoute from './controllers/post-route.js'
import commentRoute from './controllers/comment-route.js'
const app = express()
const port = process.env.PORT ?? 3006
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API
  app.use("/api/v1/users", userRoute);
  app.use("/api/v1/posts", postRoute);
  app.use("/api/v1/comments", commentRoute);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/api/v1/`)
})