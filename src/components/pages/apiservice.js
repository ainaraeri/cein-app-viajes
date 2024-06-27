import axios from 'axios';

// Función para obtener los nombres de las etiquetas usando sus IDs
const fetchTagsForPost = async (tagIds) => {
  try {
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/tags', {
      params: {
        include: tagIds.join(',')
      }
    });
    return response.data.map(tag => tag.name.toLowerCase());
  } catch (error) {
    console.error('Error fetching tags for post:', error);
    return [];
  }
};

const fetchFilteredPosts = async (tags) => {
  console.log('Etiquetas recibidas en fetchFilteredPosts:', tags); // Verificar etiquetas recibidas

  try {
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/posts');
    const posts = response.data;

    const normalizedTags = tags.map(tag => tag.toLowerCase().trim());
    console.log('Etiquetas normalizadas:', normalizedTags); // Verificar etiquetas normalizadas

    // Obtener todas las etiquetas para cada post
    const postsWithTags = await Promise.all(posts.map(async (post) => {
      const postTags = await fetchTagsForPost(post.tags);
      return { ...post, tags: postTags };
    }));

    const filteredPosts = postsWithTags.filter(post => {
      const postTitle = post.title.rendered.toLowerCase();
      const postContent = post.content.rendered.toLowerCase();
      const postTags = post.tags;

      console.log('Etiquetas del post:', postTags); // Verificar etiquetas del post

      // Verificar si todas las etiquetas normalizadas están presentes en postTags
      return normalizedTags.every(tag => postTags.includes(tag) || postTitle.includes(tag) || postContent.includes(tag));
    });

    console.log('Posts filtrados:', filteredPosts); // Verificar posts filtrados

    return filteredPosts;
  } catch (error) {
    console.error('Error fetching filtered posts:', error);
    throw error; // Re-lanza el error para manejarlo en el componente de Destinations
  }
};

export default fetchFilteredPosts;
