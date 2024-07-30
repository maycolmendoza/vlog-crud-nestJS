import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [author, setAuthor] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const result = await axios.get('http://localhost:3000/articles');
    setArticles(result.data);
  };

  const createArticle = async () => {
    const newArticle = { title, content, publicationDate, author };
    await axios.post('http://localhost:3000/articles', newArticle);
    fetchArticles();
  };

  const updateArticle = async () => {
    const updatedArticle = { title, content, publicationDate, author };
    await axios.patch(`http://localhost:3000/articles/${editId}`, updatedArticle);
    fetchArticles();
    setEditMode(false);
    setEditId(null);
    setTitle('');
    setContent('');
    setPublicationDate('');
    setAuthor('');
  };

  const deleteArticle = async (id) => {
    await axios.delete(`http://localhost:3000/articles/${id}`);
    fetchArticles();
  };

  const handleEdit = (article) => {
    setEditMode(true);
    setEditId(article.id);
    setTitle(article.title);
    setContent(article.content);
    setPublicationDate(new Date(article.publicationDate).toISOString().split('T')[0]);
    setAuthor(article.author);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      updateArticle();
    } else {
      createArticle();
    }
  };

  return (
    
    <div class='container'>
      <h1 class="poppins-bold ">Vlog</h1>
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          class="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <input
          type="text"
          class="form-control"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        /><br/>
        <input
          type="date"
          class="form-control"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="Author"
          class="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        /><br/>
        <button type="submit" class="btn btn-secondary btn-lg">{editMode ? 'Update Article' : 'Add Article'}</button>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Publication Date</th>
            <th scope="col">Author</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.content}</td>
              <td>{new Date(article.publicationDate).toLocaleDateString()}</td>
              <td>{article.author}</td>
              <td>
                <button onClick={() => handleEdit(article)}>Edit</button>
                <button onClick={() => deleteArticle(article.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
