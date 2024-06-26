import React, { useEffect, useState } from 'react';

const Destinations = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = JSON.parse(localStorage.getItem('filteredPosts'));
    setPosts(filteredPosts || []);
  }, []);

  return (
    <div>
      <h1>Destinos Recomendados</h1>
      {posts.length === 0 ? (
        <p>No se encontraron destinos que coincidan con tus respuestas.</p>
      ) : (
        posts.map(post => (
          <div key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        ))
      )}
    </div>
  );
}

export default Destinations;
