import { getAllPosts, createPost, getPostById, updatePostById, deletePostById } from './db.js';
import express from 'express';

const port = 22049;
const app = express();
app.use(express.json());

app.get('/hello', async (req, res)=>{
  res.send('HELLO WELCOME')
})

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});
app.get('/posts', async (req, res) => {
    const posts = await getAllPosts()
    res.json(posts)
})
app.post('/posts', async (req, res) => {
  try {
    const { name, description, family, diet, funfact } = req.body;
    const newPost = await createPost(name, description, family, diet, funfact);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await getPostById(id);
    if (post) {
      res.json(post);
      res.status(200).json(newPost);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.put('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, family, diet, funfact } = req.body; 
    const updatedPost = await updatePostById(id, { name, description, family, diet, funfact });
    if (updatedPost.affectedRows > 0) {
      res.json(await getPostById(id));
      res.status(200).json(newPost);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Eliminar un post
app.delete('/posts/:id', async (req, res) => {
  try {
      const { id } = req.params;
      await deletePostById(id);
      res.status(200).send(`Post with ID ${id} deleted successfully.`);
  } catch (error) {
      res.status(404).send(error.message);
  }
});
app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
});

