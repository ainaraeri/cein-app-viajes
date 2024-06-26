// ApiService.js

import axios from 'axios';

const fetchFilteredPosts = async (tags) => {
  try {
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/posts');
    const posts = response.data;
    const normalizedTags = tags.map(tag => tag.toLowerCase().trim());

    const filteredPosts = posts.filter(post => {
      return tags.some(tag => 
        post.title.rendered.toLowerCase().includes(tag.toLowerCase()) ||
        post.content.rendered.toLowerCase().includes(tag.toLowerCase())
      );
    });

    return filteredPosts;
  } catch (error) {
    console.error('Error fetching filtered posts:', error);
    throw error; // Re-lanza el error para manejarlo en el componente de Destinations
  }
};

export default fetchFilteredPosts;
