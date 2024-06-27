import React, { useEffect, useState } from 'react';
import fetchFilteredPosts from './apiservice'; // Ajusta la ruta según la ubicación real de ApiService.js
import { useLocation } from 'react-router-dom';

const Destinations = () => {
  const [tags, setTags] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const location = useLocation();


  useEffect(() => {
    const { state } = location;
    if (state && state.tags) {
      const normalizedTags = state.tags.map(tag => tag.toLowerCase().trim());
      handleFetchPosts(normalizedTags);
    }
  }, [location]);


  const handleFetchPosts = async (tags) => {
    try {
      const response = await fetchFilteredPosts(tags);
      setFilteredPosts(response);
    } catch (error) {
      console.error('Error fetching filtered posts:', error);
      // Manejar el error de manera apropiada
    }
  };

  
  /*/const handleTagsChange = (event) => {
    setTags(event.target.value.split(',').map(tag => tag.trim().toLowerCase())); // Normalizar las etiquetas al ingresarlas
  };/*/
  


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
