import axios from 'axios';

const fetchFilteredPosts = async (tags) => {
  console.log('Etiquetas recibidas en fetchFilteredPosts:', tags); // Verificar etiquetas recibidas

  try {
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/posts');
    const posts = response.data;

    const normalizedTags = tags.map(tag => tag.toLowerCase().trim());
    console.log('Etiquetas normalizadas:', normalizedTags); // Verificar etiquetas normalizadas

    const filteredPosts = posts.filter(post => {
      const postTitle = post.title.rendered.toLowerCase();
      const postContent = post.content.rendered.toLowerCase();
      return normalizedTags.some(tag => 
        postTitle.includes(tag) || postContent.includes(tag)
      );
    });

    console.log('Posts filtrados:', filteredPosts); // Verificar posts filtrados

    return filteredPosts;
  } catch (error) {
    console.error('Error fetching filtered posts:', error);
    throw error; // Re-lanza el error para manejarlo en el componente de Destinations
  }
};

export default fetchFilteredPosts;
