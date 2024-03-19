
import conn from './conn.js'

export async function getAllPosts() {
 const [rows] = await conn.query('SELECT * FROM cetaceos')
 return rows
}
 export async function createPost(name, description, family, diet, funfact) {
    const [result] = await conn.query('INSERT INTO cetaceos (name, description, family, diet, funfact) VALUES (?, ?, ?, ?, ?)', [name, description, family, diet, funfact]);
    return result;
  }
  
  export async function getPostById(id) {
    const [rows] = await conn.query('SELECT * FROM cetaceos WHERE id = ?', [id]);
    return rows[0];
  }
  
  export async function updatePostById(id, post) {
    const { name, description, family, diet, funfact } = post;
    const [result] = await conn.query('UPDATE cetaceos SET name = ?, description = ?, family = ?, diet = ?, funfact = ? WHERE id = ?', [name, description, family, diet, funfact, id]);
    return result;
  }
  
  export async function deletePostById(id) {
    const [result] = await conn.query('DELETE FROM cetaceos WHERE id = ?', [id]);
    return result;
  }