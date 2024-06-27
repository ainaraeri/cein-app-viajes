import React, { useEffect, useState } from 'react';
import fetchFilteredPosts from './apiservice'; // Asegúrate de que la ruta es correcta
import { useLocation } from 'react-router-dom';

const Destinations = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    if (state && state.tags) {
      console.log('Etiquetas en Destinations:', state.tags); // Verificar etiquetas recibidas
      handleFetchPosts(state.tags);
    }
  }, [location]);

  const handleFetchPosts = async (tags) => {
    try {
      const response = await fetchFilteredPosts(tags);
      setFilteredPosts(response);
    } catch (error) {
      console.error('Error fetching filtered posts:', error);
    }
  };

  return (
    <div>
      <div>
        {filteredPosts.length > 0 ? (
          <div>
            <h2>Posts Filtrados</h2>
            <ul>
              {filteredPosts.map(post => (
                <li key={post.id}>
                  <h3>{post.title.rendered}</h3>
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No se encontraron posts que coincidan con las etiquetas seleccionadas.</p>
        )}
      </div>
    </div>
  );
};

export default Destinations;
