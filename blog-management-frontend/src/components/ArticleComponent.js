import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleComponent = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const createArticle = async (event) => {
    event.preventDefault();
    const articleData = {
      title,
      content,
      publicationDate: new Date(),
      author,
    };

    try {
      const response = await axios.post('http://localhost:3000/articles', articleData);
      setArticles([...articles, response.data]);
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/articles/${id}`);
      setArticles(articles.filter(article => article.id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div>
      <h1>Articles</h1>
      <form onSubmit={createArticle}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Add Article</button>
      </form>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>{article.author}</p>
            <button onClick={() => deleteArticle(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleComponent;
