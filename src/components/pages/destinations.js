// destinations.js

import React, { useState } from 'react';
import fetchFilteredPosts from './apiservice'; // Ajusta la ruta según la ubicación real de ApiService.js

const Destinations = () => {
  const [tags, setTags] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleFetchPosts = async () => {
    try {
      const normalizedTags = tags.map(tag => tag.toLowerCase().trim()); // Normalizar las etiquetas
  
      const response = await fetchFilteredPosts(normalizedTags);
      setFilteredPosts(response);
    } catch (error) {
      console.error('Error fetching filtered posts:', error);
      // Manejar el error de manera apropiada
    }
  };
  
  const handleTagsChange = (event) => {
    setTags(event.target.value.split(',').map(tag => tag.trim().toLowerCase())); // Normalizar las etiquetas al ingresarlas
  };
  

  return (
    <div>
      <input type="text" placeholder="Introduce etiquetas separadas por coma" onChange={handleTagsChange} />
      <button onClick={handleFetchPosts}>Filtrar Posts</button>

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
