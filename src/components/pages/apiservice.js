import axios from 'axios';

const fetchTagNames = async (tagIds) => {
  try {
    const response = await axios.get(`https://justpackandbreathe.com/wp-json/wp/v2/tags?include=${tagIds.join(',')}`);
    return response.data.map(tag => tag.name.toLowerCase());
  } catch (error) {
    console.error('Error fetching tag names:', error);
    return [];
  }
};

const fetchFeaturedImage = async (mediaId) => {
  try {
    const response = await axios.get(`https://justpackandbreathe.com/wp-json/wp/v2/media/${mediaId}`);
    return response.data.source_url;
  } catch (error) {
    console.error('Error fetching featured image:', error);
    return null;
  }
};

const fetchFilteredPosts = async (tags) => {
  console.log('Etiquetas recibidas en fetchFilteredPosts:', tags);

  try {
    const response = await axios.get('https://justpackandbreathe.com/wp-json/wp/v2/posts');
    const posts = response.data;

    const normalizedTags = tags.map(tag => tag.toLowerCase().trim());
    console.log('Etiquetas normalizadas:', normalizedTags);

    const filteredPosts = await Promise.all(posts.map(async post => {
      if (!post.tags || post.tags.length === 0) {
        console.log('El post no tiene etiquetas:', post.id);
        return null;
      }

      const postTagNames = await fetchTagNames(post.tags);
      console.log('Etiquetas del post:', postTagNames);

      const hasAllTags = normalizedTags.every(tag => postTagNames.includes(tag));

      if (hasAllTags) {
        const featuredImage = post.featured_media ? await fetchFeaturedImage(post.featured_media) : null;
        return { ...post, featuredImage };
      }
      return null;
    }));

    const validPosts = filteredPosts.filter(post => post !== null);

    console.log('Posts filtrados:', validPosts);
    return validPosts;
  } catch (error) {
    console.error('Error fetching filtered posts:', error);
    throw error;
  }
};

export default fetchFilteredPosts;
