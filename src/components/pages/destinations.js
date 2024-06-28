import React, { useState, useEffect } from 'react';
import fetchFilteredPosts from './apiservice';
import '../../style/destinations.scss';

const Destinations = ({ location }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tags = location.state?.tags || [];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const filteredPosts = await fetchFilteredPosts(tags);
        setPosts(filteredPosts.map(post => ({
          ...post,
          // Eliminar etiquetas HTML y caracteres especiales del texto del excerpt
          excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').replace(/&hellip;/g, '...'),
        })));
      } catch (error) {
        setError('Error fetching posts');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [tags]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (posts.length === 0) {
    return <p>No se encontraron posts que coincidan con las etiquetas seleccionadas.</p>;
  }

  return (
    <div className="destinations">
      <h1>Destinos Filtrados</h1>
      <div className="grid">
        {posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-image">
              {post.featuredImage && (
                <img src={post.featuredImage} alt={post.title.rendered} />
              )}
            </div>
            <div className="post-content">
              <div className="post-info">
                <h2>{post.title.rendered}</h2>
                <p>{post.excerpt}</p>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  Leer más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
