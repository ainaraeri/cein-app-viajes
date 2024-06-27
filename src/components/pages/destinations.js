import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchFilteredPosts from './apiservice'; // Asegúrate de importar correctamente

const Destinations = () => {
  const location = useLocation();
  const tags = location.state?.tags || [];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const filteredPosts = await fetchFilteredPosts(tags);
        setPosts(filteredPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Maneja el error adecuadamente
      }
    };

    fetchPosts();
  }, [tags]);

  if (posts.length === 0) {
    return <p>No se encontraron destinos con las etiquetas seleccionadas.</p>;
  }

  return (
    <div>
      <h2>Destinos filtrados:</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;
